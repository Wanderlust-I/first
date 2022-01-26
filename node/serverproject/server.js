const Koa=require("Koa"); //Koa为构造函数
const router=require("koa-router")();
const static=require("koa-static");
const app =new Koa();
app.use(static(__dirname+'/public'))
// app.use(async(ctx)=>{
//     ctx.body='hello world'
// })                          
router.get("/",async(ctx)=>{
    ctx.body='<h1>home</h1>'
})
router.get("/2",async(ctx)=>{
    ctx.body="hello world"
})
router.get("/image",async(ctx)=>{
    ctx.body=`<image src='/image/home.png'>`
})
router.get("/doc",async(ctx)=>{
   
    ctx.body=`
    <link rel="stylesheet" href="/css/1.css">
    <p >nmsl</p>
    `
})
app.use(router.routes())
app.listen(3000,()=>{
    console.log("server is running")
})