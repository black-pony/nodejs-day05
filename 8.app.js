var http = require("http");
var fs = require("fs");
var path = require("path");
var mime = require("mime");
var server = http.createServer();
server.on("request",function(request,response){
    //发送http头部
    //http状态值： 200 ok
    //内容类型： text/plain
    response.writeHead(200,{"Content-Type":"text/plain;charset=utf-8"});
    var method = request.method.toLowerCase();
    var url = request.url;
    
    if(method === "get" && url === "/"){
        fs.readFile(path.join(__dirname,"index.html"),function(err,data){
            if(err){
                return res.end(err.message);
            }
        });
    }else if(method === "get" && url.startWith("/node_modules/")){//或者url.indexOf("/node_modules") === 0
        var staticPath = path.join(__dirname,url);
        fs.readFile(staticPath,function(err,data){
            if(err){
                return res.end(err.message);
            }
            var contentType = mime.lookup(url);
            res.writeHead(200,{
                "Content-Type":contentType
            });
            res.end(data);
        });
    }
});
server.listen(3000,"127.0.0.1",function(err){
    if(err)
        throw "端口3000被占用";
    console.log("服务器开启成功，监听端口3000");
});