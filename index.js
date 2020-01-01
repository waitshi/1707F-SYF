const koa =require('koa')
const app=new koa()

app.use(async (ctx,next)=>{
    console.log('一个中间件')
    await next()
})
// app.use(async (ctx,next)=> {
//     console.log('二个中间件')
// })

// let dele=()=>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve()
//         },1000)
//     })
// }

// app.use( async (ctx,next)=>{
//     console.log('三个中间件')
//     await dele()
// })

app.listen(3000,()=>{
    console.log('服务启动成功')
})

