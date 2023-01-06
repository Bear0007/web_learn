//引入 express

const express = require('express')

//创建应用
const app = express()

//创建路由规则
//request是请求报文的封装
//response是响应报文的封装
app.get('/server', (request, response) => {

    //设置响应头 跨域
    response.setHeader('Access-Control-Allow-Origin', '*')
    //设置响应体
    response.send("hellow bear")
})
app.post('/server', (request, response) => {

    //设置响应头 跨域
    response.setHeader('Access-Control-Allow-Origin', '*')
    response.setHeader('Access-Control-Allow-Methods:GET,POST,PUT,POST')
    response.setHeader('Access-Control-Allow-Credentials', 'true')
    response.setHeader('Access-Control-Allow-Headers','*')
    //设置响应体
    response.send("hellow bear")
})
app.all('/json-server', (request, response) => {

    //设置响应头 跨域
    response.setHeader('Access-Control-Allow-Origin', '*')
    response.setHeader('Access-Control-Allow-Methods:GET,POST,PUT,POST')
    response.setHeader('Access-Control-Allow-Credentials', 'true')
    response.setHeader('Access-Control-Allow-Headers:x-requested-with,content-type')
    //设置响应体
    let data = {
        'name':'jackson',
        'age':22
    }

    response.send(JSON.stringify(data))
})

//网络超时
app.all('/delay', (request, response) => {

    //设置响应头 跨域
    response.setHeader('Access-Control-Allow-Origin', '*')
    //设置响应体
    setTimeout(()=>{
        response.send('hellow jackson')
    },3000)

   
})


// jsonp
app.all('/jsonp-server', (request, response) => {

   
    //设置响应体
    let data = {
        'name':'jackson',
        'age':22
    }
    let srt = JSON.stringify(data)
    response.end(`handle(${srt})`)
})

// 原生jsonp
app.all('/check-name', (request, response) => {

   
    //设置响应体
    let data = {
        'name':'jackson',
        msg:'用户名已存在'
    }
    let srt = JSON.stringify(data)
    response.end(`handle(${srt})`)
})
//监听端口启动服务
app.listen(8000,()=>{
    console.log('服务已经启动，8000端口监听中')
})

