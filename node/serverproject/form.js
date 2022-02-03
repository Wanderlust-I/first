const koa=require("koa");
const router=require("koa-router")();
const static=require("koa-static")
const nunjucks=require("nunjucks");
const cors=require("koa2-cors");
const views=require("koa-views");
const parser=require("koa-parser");
const app=new koa();
app.use(static(__dirname+"/public"))
app.use(views(__dirname+"/views",{map:{html:"nunjucks"}}))
app.use(cors());
app.use(parser());
app.use(router.routes());
app.use(static(__dirname+"/public"))
let fruits=["香蕉","苹果","鸭梨"]
router.get("/",async ctx=>{
    await ctx.render("form`s button");
})
router.get("/fruits",async ctx=>{
    ctx.body=fruits;
})
router.post("/fruits",async ctx=>{
   let fruit= ctx.request.body.fruit;
   fruits.push(fruit);
   ctx.body=fruits;
})

router.put("/fruits/:id",async ctx=>{
    let id=ctx.params.id;
    let fruit=ctx.request.body.fruit;
    fruits.splice(id,1,fruit);
    ctx.body=fruits;
})
router.delete("/fruits/:id",async ctx=>{
    let id=ctx.params.id;
    fruits.splice(id,1);
    ctx.body=fruits;
})

app.listen(2200,()=>{
    console.log("hello word");
})