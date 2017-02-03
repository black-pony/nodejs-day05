// 对于下面的服务器来说，无论客户端输入了任何的请求路径，返回的都是当前服务器的最新时间
var http = require('http')
var moment = require('moment')

// 1. 创建一个 HTTP 服务器
var server = http.createServer()

// 2. server 实例有一个 request 请求事件
// 当 server 接收到客户端请求的时候就会自动触发 这个 request 请求事件，然后调用回调函数
// server 服务器已经自动将客户端的请求报文解析成了一个对象 Request 对象，然后传递给了 request 请求处理回调函数第一个参数
// server 服务器还会把改客户端的 Socket 对象包装成一个 Response 对象，然后传递给 request 请求处理回到函数的第二个参数
server.on('request', function(request, response) {
  // 当调用了 wirte 方法之后，客户端不会主动的挂电话，需要我们自己手动挂掉

  // 服务器给客户端发送响应消息之前，最好告诉客户端本次的数据内容 Content-Type 是什么类型，包括编码格式
  response.writeHead(200, {
    'Content-Type': 'text/plain; charset=utf-8'
  })

  // 当浏览器收到该消息的时候，如果没有主动的告诉浏览器，该内容是 utf8 编码，那浏览器会通过 当期 OS 默认的系统编码来解析数据
  response.write('当前服务器最新时间是：' + moment().format('YYYY-MM-DD hh:mm:ss'))

  // 注意：当调用了 response.end() 之后，就不能再次发送数据了，否则报错
  // 注意：response.end() 一定要在要在发送响应头和响应内容之后
  // write 可以写多次，但是在一次请求个响应过程中，一定要记得 end。表示结束响应
  response.end()
})

// 3. 开启服务器，设置监听端口
server.listen(3000, '127.0.0.1', function() {
  console.log('服务器开启成功，请访问 http://127.0.0.1:3000')
})
