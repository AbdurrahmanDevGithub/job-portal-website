const Company = require('../models/company.model')
const Job = require('../models/jobPost.model')


const companyRegiter = async(email,password,username)=>{
  try{
    if(await Company.emailIsTaken(email)){
      return { error: "email is already taken" };
    }
    
    const company = new Company({email,password,username})
    await company.save()

    return company
    
  }catch(error){
    console.log(error)
    return { error: "Error in register services" };
  }
}

const companySignIn=async(email,password)=>{
  try{
    const company = await Company.findOne({email})
    if(!company){
      return {error: "Invalid email"}
    }

    const validPassword = await company.comparePassword(password)
    if(!validPassword){
      return {error: "Invalid password"}
    }
    
    return company
    
  }catch(error){
    console.log(error)
    return {error:"Error in signin services"}
  }
}


module.exports = {
  companyRegiter,
  companySignIn
}