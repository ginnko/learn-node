const fs = require('fs');

let data = '';

// 创建可读流
const readStream = fs.createReadStream('input.txt');

// 设置编码为utf8
readStream.setEncoding('UTF8');

// 处理流事件，data、end、error
readStream.on('data', function(chunk) {
  data += chunk;
});

readStream.on('end', function() {
  console.log(data);
});

readStream.on('error', function(err) {
  console.log(err.stack);
});

console.log('程序执行完毕');