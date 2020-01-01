let koa=require('koa')
let app=new koa()
let router=require('koa-router')();
const fs =require('fs')
const path=require('path')
const static=require('koa-static')
const query =require('../db/index')
app.use(router.routes())
app.use(router.allowedMethods());
app.use(static (
    path.join(__dirname,'./public')
))
router.get('/login',async (ctx)=>{
    ctx.body='左大头'
})
router.get('/list',async (ctx)=>{
   let data=  await query()
   ctx.body={
       code:1,
       data
   }
})
app.listen(3000,()=>{
    console.log('服务开启成功')
})