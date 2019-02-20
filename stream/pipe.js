const fs = require('fs');

// 创建一个可读流
const readStream = fs.createReadStream('input.txt');
// 创建一个可写流
const writeStream = fs.createWriteStream('output.txt');
// 管道读写操作
readStream.pipe(writeStream);

console.log('程序执行完毕');