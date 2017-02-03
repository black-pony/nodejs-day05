var http = require('http')
var fs = require('fs')
var path = require('path')

var server = http.createServer()

server.on('request', function(req, res) {
  var url = req.url

  if (url === '/') {
    fs.readFile(path.join(__dirname, 'index.html'), 'utf8', function(err, data) {
      if (err) {
        // 如果 throw err 就会造成 服务器崩溃
        // 为了在开发阶段更快的看到错误信息，所以可以把错误信息输出到 客户端浏览器中
        return res.end(err.message)
      }
      res.writeHead(200, {
        'Content-Type': 'text/html; charset=utf8'
      })
      res.end(data)
    })
  } else if (url === 'a') {
    fs.readFile(path.join(__dirname, 'css/main.css'), 'utf8', function(err, data) {
      if (err) {
        // 如果 throw err 就会造成 服务器崩溃
        // 为了在开发阶段更快的看到错误信息，所以可以把错误信息输出到 客户端浏览器中
        return res.end(err.message)
      }
      res.writeHead(200, {
        'Content-Type': 'text/css'
      })
      res.end(data)
    })
  } else if (url === '/img/meinv.jpg') {
    fs.readFile(path.join(__dirname, 'img/meinv.jpg'), function(err, data) {
      if (err) {
        // 如果 throw err 就会造成 服务器崩溃
        // 为了在开发阶段更快的看到错误信息，所以可以把错误信息输出到 客户端浏览器中
        return res.end(err.message)
      }
      // res.writeHead(200, {
      //   'Content-Type': ''
      // })
      res.end(data)
    })
  } else if (url === '/js/main.js') {
    fs.readFile(path.join(__dirname, 'js/main.js'), 'utf8', function(err, data) {
      if (err) {
        // 如果 throw err 就会造成 服务器崩溃
        // 为了在开发阶段更快的看到错误信息，所以可以把错误信息输出到 客户端浏览器中
        return res.end(err.message)
      }
      res.writeHead(200, {
        'Content-Type': 'text/html; charset=utf8'
      })
      res.end(data)
    })
  }
})

server.listen(3000, '127.0.0.1', function() {
  console.log('服务器开启成功，请访问 http://192.168.141.144:3000/')
})
