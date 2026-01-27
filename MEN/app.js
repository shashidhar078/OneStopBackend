const http=require('http')


//example for routing 
const server = http.createServer((req,res)=>{
    console.log(req.url);
    if(req.url=="/about")
    {
        res.end("This is about page");
    }
    if(req.url=="/profile")
    {
        res.end("This is profile page")
    }
    // res.end("Hello world");
})

server.listen(3000)