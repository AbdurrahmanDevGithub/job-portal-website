const express = require('express')
const app = express()
const mongoose = require('mongoose')
require('dotenv').config()
const routes = require('./routes/route')
const cors = require('cors')



const { xss } = require('express-xss-sanitizer')
const mongoSanitize = require('express-mongo-sanitize')
app.use(express.urlencoded({ extended: true }));


app.use(express.json());
app.use(xss())
app.use(mongoSanitize())

const corsOptions = {
  origin: 'http://localhost:5173', // Allow frontend to communicate with backend
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true, // Enable cookies if needed
};

app.use(cors(corsOptions)); // Apply the CORS middleware



MONGO_URI = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@jobportal.y9yxa.mongodb.net/?retryWrites=true&w=majority&appName=jobportal`




app.use(routes)


//Database connection
const dbConnection = async()=>{
  try{
    await mongoose.connect(MONGO_URI)
    console.log("DB connected successfully");
  }catch(error){
    console.log("error in db connection",error);
  }
}
dbConnection()




const PORT = process.env.SERVER_PORT

app.listen(PORT,()=>{
  console.log(`server runs on port ${PORT}`);
})