
const { response } = require('express');
const express =require('express');

const app=express();

app.get("/",(req,res)=>{
    res.send("Welcome to my Home page");
});

app.get("/about",(req,res)=>{
    res.status(200).send("Welcome to about page");
});

app.get("/contact",(req,res)=>{
    res.status(200).send("Welcome to my contact page");
});



app.listen(8000,()=>{
    console.log("Listeining...")
})


