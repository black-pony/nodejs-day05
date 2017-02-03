var net = require("net");

var server = net.createServer(function(socket){
    socket.on("data",function(data){
        // console.log(data.toString());

        //响应报文
        //HTTP/1.1 200 OK
        //Server: nginx
        //Date: Tue, 08 Nov 2016 03:23:50 GMT
        //Content-Type: text/html; charset=UTF-8
        //Content-Length: 13017
        var html = "<!DOCTYPE html><html><head><meta charset='utf-8'></head><body><h1>人生中的第一个网页</h1></body></html>";
        var response = "HTTP/1.1 200 OK\n\r" +//'\r'是回车,'\n'是换行,前者使光标到行首,后者使光标下移一格,通常敲一个回车键,即是回车,又是换行(\r\n)
            "Date: " + (new Date) + "\n\r"   +
            "Server: eric's server\n\r" +
            "Content-Type: text/html; charset=UTF-8\n\r" +
            "Content-Length: " + html.length + "\n\r" +
            "\n\r" + 
            html;
        socket.write(response);
        socket.end();//断开连接
    });
});

server.listen(3000,function(){
    console.log("正在监听3000...");
});