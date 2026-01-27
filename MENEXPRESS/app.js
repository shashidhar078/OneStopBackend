const express=require('express')
const app=express();

app.get("/about",(req,res)=>{
    res.send("This is About page");
})


app.get("/home",(req,res)=>{
    res.send("This is Home Page");
})


app.use("/",(req,res)=>{
    res.send("This my About page");
})

app.listen(3000,()=>{
    console.log("server is running on port number 3000")
})