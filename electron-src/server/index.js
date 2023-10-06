
let http = require('http')
const fs = require("fs")
const path = require("path")
const mimeTypes = require("./mimetypes/index.js" )
const server_config = require( "./config/index.js" )

let server = http.createServer()

// 定义网站根目录
let wwwroot = server_config.wwwroot

// 定义网站域名与端口
const port = server_config.port
const host = `${server_config.host}:${port}`


server.on('request',(req, res)=>{

    let url_obj = new URL(host + req.url)

    // 获取请求文件后缀
    let request_file_extname = path.extname(url_obj.pathname).substring(1)

    // 请求目录处理
    if(!request_file_extname){
        request_file_extname = "html"
        url_obj =  new URL(host + url_obj.pathname + "/index.html" + url_obj.search)
    }

    if(mimeTypes[request_file_extname]){
        res.setHeader("Content-Type", mimeTypes[request_file_extname] )
    }

    // 自定义响应头
    res.setHeader("Server", "express++" )

    try{
        // 动态获取环境变量
        wwwroot = process.env.hs_wwwroot? process.env.hs_wwwroot : wwwroot;

        // 解析url
        const request_file_path = path.resolve(wwwroot, url_obj.pathname.replace(/^\/+(.+)/, "$1"))

        // 读取文件
        const request_file_data = fs.readFileSync(request_file_path);

        //响应内容
        res.write(request_file_data)
    }catch(e) {
        // console.log(e)

        res.statusCode = 404
        res.write("<h1 style='text-align: center'>404</h1>")
    }
    finally{
        //响应结束标志
        res.end()
    }

})

server.listen(port, ()=>{
    console.log(`server start: ${host}`)
})