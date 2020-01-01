const mysql=require('mysql')
module.exports=()=>{
    //创建连接对象
    let connection=mysql.createConnection({
        host:'localhost',
        port:'3306',
        user:'root',
        password:'root',
        database:'login'
    })
    //连接数据库
    connection.connect((error)=>{
        if(error){
            console.log('数据库不存在')
        }else{
            console.log('数据库连接成功')
        }
    })

//操作数据库 
//查 就是select * 是全部   
return new Promise((resolve,reject)=>{
    connection.query('select * from loginlist',(error,data)=>{
        if(error){
            reject(error)
        }else{
            resolve(data)
        }
        connection.end() //关闭
    })
})


}