const http = require('http');
const fs = require('fs');
const url = require('url');

// 创建服务器
http.createServer(function(req, res) {
  const pathname = url.parse(req.url).pathname;
  console.log('Request for ' + pathname + ' received.');

  fs.readFile(pathname.substr(1), function(err, data) {
    if (err) {
      console.log(err);
      res.writeHead(404, { 'Content-Type': 'text/html' });
    } else {
      res.writeHead(200, { 'Content-Type': 'text/plain;charset=utf8'});
      res.write(data.toString());
    }
    res.end();
  });
}).listen(3000, function() {
  console.log('starting on port 3000.');
});