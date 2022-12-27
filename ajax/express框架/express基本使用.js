//引入 express

const express = require('express')

//创建应用
const app = express()

//创建路由规则
//request是请求报文的封装
//response是响应报文的封装
app.get('/', (request, response) => {
    //设置响应
    response.send("hellow bear")
})

//监听端口启动服务
app.listen(8000,()=>{
    console.log('服务已经启动，8000端口监听中')
})