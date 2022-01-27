const Koa=require("Koa");
const views=require("koa-views");
const nunjucks=require("nunjucks");
const router=require("koa-router")();
const parser=require("koa-parser");
const session=require("koa-session");
const keys  = require("nunjucks/src/lib");
const app=new Koa();
app.keys=["123456"]
app.use(session({
    maxAge:20000
},app))
app.use(parser());


let fruits=["香蕉","苹果","鸭梨"]

router.get("/",async(ctx)=>{
   // ctx.cookies.set("user","admin")
   let studentlist=["小明","小红","小亮"];
    await ctx.render("index",{
        title:"首页",
        studentlist:studentlist,
        islogin:false,
        uname:"admin" 
    });
})

router.get("/fruits", async ctx=>{
ctx.body=fruits;
})
router.post("/fruits/fruit",async ctx=>{
    let fruit=ctx.request.body.fruit;
    fruits.push(fruit);
    ctx.body=fruits;
})
router.delete("/fruits/fruit/:id",async ctx=>{
    let id=ctx.params.id;
    fruits.splice(id,1);
    ctx.body=fruits;

})
router.put("/fruits/fruit/:id",async ctx=>{
    let id=ctx.params.id;
    let fruit=ctx.request.body.fruit;
    fruits.splice(id,1,fruit)
    ctx.body=fruits;
})

//实现计数网页刷新次数
// router.get("/get",async ctx=>{
// let count =ctx.cookies.get("count");
// if(count>0)
//     {
//         count++;
//         ctx.cookies.set("count",count,{
//             maxAge:2000   //maxAge设置cookie过期时间
//         })
//     }
//     else
//     {
//         count=1;
//         ctx.cookies.set("count",1)
//     }
//     ctx.body=count;
// })
router.get("/get",async ctx=>{
   let count= ctx.session.count;
    if(count>0){
        count++;
        ctx.session.count=count;
        ctx.body=count;
    }
    else
    {
        count=1;
        ctx.session.count=count;
        ctx.body=count;
    }
})
router.get("/doc",async(ctx)=>{
await ctx.render("index",{title:"文档"})
})

router.get("/form",async(ctx)=>{ 
await ctx.render("form");
})
// router.get("/login",async(ctx)=>{
//     let username=ctx.query.username;  //query只能接get请求的参数
//     let password=ctx.query.password; 
//     await ctx.render("home",{username:username,password:password})
// })
router.post("/login",async(ctx)=>{
    let username=ctx.request.body.username;   //post请求需要koa-parser 使用request.body
    let password=ctx.request.body.password; 
    //假设正确的用户名和密码  输入正确则跳转登录成功，否则失败并显示输错的用户名密码
    if(username=='admin'&&password=='123456')
    ctx.body=`<p>登录成功<p>`
    else
    await ctx.render("home",{username:username,password:password})
})
app.use(views(__dirname+"/views",{map:{html:"nunjucks"}}))

// app.use(async (ctx)=>{
//      await ctx.render("index",{title:"hello world"})   //将之间的ctx.body改为render  render用于渲染模板但render为异步 所以加await
//      //第一个参数为模板名 第二个可以给模板传递参数
    
// })
app.use(router.routes());
app.listen(2200,()=>{
    console.log("running");
});

