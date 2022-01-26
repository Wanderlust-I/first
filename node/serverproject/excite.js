const koa=require("Koa");
const views=require("koa-views");
const nunjucks=require("nunjucks");
const router=require("koa-router")();
const app=new koa();

app.use(views(__dirname+"/views",{map:{html:"nunjucks"}}))
router.get("/",async (ctx)=>{
    await ctx.render("index");
})

app.use(router.routes());
app.listen("2500",()=>{
    console.log("running")
})