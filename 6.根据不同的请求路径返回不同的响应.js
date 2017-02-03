// 网站的路径实际上就是一个标识而已
// 如果你看到 /login.html 这个网站不一定有 login.html 这个页面

var http = require('http')
var fs = require('fs')
var path = require('path')

var server = http.createServer()

server.on('request', function(req, res) {
  // console.log(req.headers)
  // console.log(req.httpVersion)
  // console.log(req.method)
  // console.log(req.url)

  // 所有的请求都会进入当前这个回调处理函数
  // 拿到当前请求路径，然后根据不同的请求路径做不同的响应
  var url = req.url

  // Node 原声提供的 http 模块天生就不支持静态文件处理
  //大家可以把这块的代码改造成switch case条件判断
  if (url === '/') {
    fs.readFile(path.join(__dirname, 'index.html'), 'utf8', function(err, data) {
      if (err) {
        throw err
      }
      res.writeHead(200, {
        'Content-Type': 'text/html; charset=utf-8'
      })
      res.end(data)
    })
  } else if (url === '/a') {
    res.end('a page')
  } else if (url === '/login.html') {
    fs.readFile(path.join(__dirname, 'register.html'), 'utf8', function(err, data) {
      if (err) {
        throw err
      }
      res.writeHead(200, {
        'Content-Type': 'text/html; charset=utf-8'
      })
      res.end(data)
    })
  } else if (url === '/meinv.jpg') {
    res.end('瞅啥呢')
  } else if (url === '/register.html') {
    fs.readFile(path.join(__dirname, 'login.html'), 'utf8', function(err, data) {
      if (err) {
        throw err
      }
      res.writeHead(200, {
        'Content-Type': 'text/html; charset=utf-8'
      })
      res.end(data)
    })
  }

})

server.listen(3000, '127.0.0.1', function() {
  console.log('server is listening at port 3000')
})
