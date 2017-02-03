var http = require("http");
http.createServer(function(req,res){
    console.log(req);
}).listen(3000,function(){
    console.log("服务器开启成功，正在监听3000端口");
});