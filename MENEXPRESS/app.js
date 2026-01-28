const express=require('express')
const morgan=require('morgan')
const app=express();

//implementing ejs 
app.set("view engine","ejs")

//using third party middleware morgan
app.use(morgan('dev'))
//it is used for logging
//explains which route is accessed and how much reponse time it took

//application-level-middleware
app.use((req,res,next)=>{
    console.log("This is a  middleware")
    a=20
    b=10
    console.log(a+b)
    next();
})
app.get("/about",(req,res,next)=>{
console.log("This is from about")
const a="shashi"
console.log(`this is ${a}`)
next();
},(req,res)=>{
    res.send("This is About page");
    
})


app.get("/home",(req,res)=>{
    res.send("This is Home Page");
})


app.use("/",(req,res)=>{
    // res.send("This my About page");
    res.render('index')
})

app.listen(3000,()=>{
    console.log("server is running on port number 3000")
})