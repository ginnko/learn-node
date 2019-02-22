const http = require('http');

const options = {
  host: 'localhost',
  port: 3000,
  path: '/index.html'
};

// 处理响应的回调函数

const callback = function(response) {
  let body = '';
  response.on('data', function(data) {
    body += data;
  });
  response.on('end', function() {
    // 数据接收完成
    console.log(body);
  });
}

const req = http.request(options, callback);
req.end();