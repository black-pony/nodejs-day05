var http = require("http");
var server = http.createServer();
server.on("request",function(request,response){
    response.writeHead(200,{"Content-Type":"text/plain;charset=utf-8"});
    var requestUrl = request.url;//http请求的网址
    var requestMethod = request.method;//http请求的方法
    var requestHeaders = request.headers;//可以获取所有的请求头信息
    console.log(requestHeaders);
    response.write("请求的路径是：" + requestUrl + " 请求的方法是：" +requestMethod);
    
    response.end("11");
});
server.listen(3000,"127.0.0.1",function(){
    console.log("服务器开启成功，监听端口3000");
});