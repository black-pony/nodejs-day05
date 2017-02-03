var http = require("http");
http.createServer(function(req,res){
    res.writeHead(200,{"Content-Type":"text/plain;charset=utf-8"});
    res.write("Hello world");
    res.end();
}).listen(3000,function(){
    console.log("创建服务器成功，正在监听3000端口...");
});