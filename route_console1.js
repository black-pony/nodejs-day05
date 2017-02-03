var http = require("http");
http.createServer(function(req,res){
    console.log("你正在访问的是" + req.url);
    console.log("你现在使用的method是" + req.method);
    res.writeHead(200,{"Content-Type":"text/plain;charset=utf-8"});
    res.write("helloworld");
    res.end();
}).listen(3000,function(){
    console.log("服务器开启成功，正在监听3000端口");
});