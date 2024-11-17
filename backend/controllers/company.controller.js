const companyServices = require('../services/company.services')
const authentication = require('../middleware/authentication')


const controller = {

  register: async (req, res) => {
    try {
        const { email, password, username } = req.body;
        const user = await companyServices.companyRegiter(email, password, username);
        return res.json({ user });
    } catch (error) {
        console.log("Error in register controller:", error);
        return res.status(500).json({ message: 'Error in register controller', error: error.message });
    }
  },
  
  signin:async(req,res)=>{
    try{
      const {email,password} = req.body
      const company = await companyServices.companySignIn(email,password)
      const token = await authentication.generateToken(company)
      return res.json({company,token})
    }catch(error){
      res.json({error:"error in signin controller",error})
    }
  }
}


module.exports = controller