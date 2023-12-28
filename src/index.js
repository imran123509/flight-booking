const express=require('express');

const bodyparser=require('body-parser')

const {PORT}=require('./config/serverconfig');
const app=express();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}))

app.listen(PORT, ()=>{
    console.log('server is connected');
    console.log(process.env) 
})