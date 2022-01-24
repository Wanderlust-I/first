const http=require("http");
const server=http.createServer((req,res)=>{
    res.end(`<h1>nmsl</h1>
           <p>why cant use chinese?</p>
    `)
})
server.listen(8080,()=>{
    console.log("server is running");
})