var http = require("http");
var server = http.createServer();

server.on("request",function(request,response){
    console.log("有客户端请求进来");
    response.writeHead(200,{"Content-Type":"text/plain;charset=utf-8"});
    response.write("hello个world");
    response.end();
});

server.listen(3000,"127.0.0.1",function(){
    console.log("开启服务器成功，监听端口3000");
});