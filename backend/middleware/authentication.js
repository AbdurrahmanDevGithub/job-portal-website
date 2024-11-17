const jwt = require('jsonwebtoken')
require('dotenv').config()


const generateToken = async(company)=>{
  try{
    const email = company.email
    const username = company.username

    const payload = { email,username }

    const token = jwt.sign(payload,process.env.TOKEN_KEY)

    return token

  }catch(error){
    console.log("error in genarateToken", error );
    return {error: "error in genarateToken"}
  }
}

const verifyToken = async(req,res,next)=>{
  try{
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if(!token) return res.json('token not found');

    jwt.verify(token,process.env.TOKEN_KEY,(err,company)=>{
      if(err) return res.json('invalid token');

      req.company = company
      next()

    })

  }catch(error){
    console.log("error in Token verification", error );
    return {error: "error in verifyToken"}
  }
}


module.exports = {
  generateToken,
  verifyToken
}