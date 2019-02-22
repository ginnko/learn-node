const http = require('http');
const url = require('url');
const util = require('util');

http.createServer(function(req, res) {
  res.writeHead(200, {
    'Content-Type': 'text/plain;charset=utf8'
  });
  // 解析url参数
  const params = url.parse(req.url, true).query;
  console.log(params);
  res.write('网站名：' + params.name);
  res.write('\n');
  res.write('网站url: ' + params.url);
  res.end();
}).listen(3000);

console.log('localhost:3000已启动。');