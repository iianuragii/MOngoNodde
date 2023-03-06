require('dotenv').config();
const express = require('express')
const mongoose = require('mongoose')
const app = express();

const uri = process.env.SECRET_KEY
async function connect(){
    try{
        await mongoose.connect(uri);
        console.log("Connected to Mongoose");
    } catch(error){
        console.error(error);
    }    
}

connect();

app.listen(8000,() =>{
    console.log("Server has started on Port 8000");
})
