const express=require('express');

const {PORT}=require('./config/serverconfig');
const app=express();

app.listen(PORT, ()=>{
    console.log('server is connected');
    console.log(process.env) 
})