const fs = require('fs');
const data = '菜鸟教程官网地址：www.runoob.com';

// 创建一个可以写入的流，写入到文件output.txt中
const writeStream = fs.createWriteStream('output.txt');

// 使用utf8编码写入数据
writeStream.write(data, 'utf8');

// 标记文件末尾
// 注意这个特殊操作

writeStream.end();

// 处理流事件，finish、error

writeStream.on('finish', function() {
  console.log('写入完成');
});

writeStream.on('error', function(err) {
  console.log(err.stack);
});

console.log('程序执行完毕');