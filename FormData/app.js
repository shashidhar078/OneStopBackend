const express=require('express')
const app=express()

app.set("view engine","ejs")
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get("/",(req,res)=>{
    res.render('index');
})

// app.get('/get-form-data',(req,res)=>{
//     console.log(req.query)
//     res.send("data received");
// }) using get and query,password is not hidden from url so use post

app.post("/get-form-data",(req,res)=>{
    console.log(req.body)
    res.send("data received")
})

app.listen(3000,()=>{
    console.log("App listens on port number : 3000")
})