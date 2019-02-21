const fs = require('fs');

// 异步读取
// fs.readFile('input.txt', function(err, data) {
//   if (err) {
//     return console.log(err);
//   }
//   console.log('异步读取:', data.toString());
// });

// console.log('程序执行完毕');

// // 异步打开文件

// console.log('准备打开文件！');
// fs.open('input.txt', 'r+', function(err, fd) {
//   if (err) {
//     return console.log(err);
//   }
//   console.log('文件打开成功：', typeof fd);
// });

// // 文件信息

// console.log('准备打开文件！');
// fs.stat('input.txt', function(err, stats) {
//   if (err) {
//     return console.err(err);
//   }
//   console.log(stats);
//   console.log('读取文件信息成功！');

//   // 检测文件类型
//   console.log('是否为文件？', stats.isFile());
//   console.log('是否为目录?', stats.isDirectory());
// });

// // 写入文件
// console.log('准备写入文件');
// fs.writeFile('input.txt', '我是通过fs.writeFile写入文件的内容', function(err) {
//   if (err) {
//     return console.log(err);
//   }
//   console.log('数据写入成功！');
//   console.log('------------我是分割线------------');
//   console.log('读取写入的数据！');
//   fs.readFile('input.txt', function(err, data) {
//     if (err) {
//       return console.log(err);
//     }
//     console.log('异步读取文件数据：', data.toString());
//   });
// });

// const buf = new Buffer.alloc(1024);

// console.log('准备打开已存在的文件！');
// fs.open('input.txt', 'r+', function(err, fd) {
//   if (err) {
//     return console.error(err);
//   }
//   console.log('文件打开成功！');
//   console.log('准备读取文件：');
//   fs.ftruncate(fd, 13, function(err) {
//     if (err) {
//       console.log(err);
//     }
//     console.log('文件截取成功。');
//     console.log('读取相同的文件');
//     fs.read(fd, buf, 0, buf.length, 0, function(err, bytes) {
//       if (err) {
//         console.log(err);
//       }
//       console.log(bytes + ' 字节被读取');
  
//       if (bytes > 0) {
//         console.log(buf.slice(0, bytes).toString());
//       }
  
//       fs.close(fd, function(err) {
//         if (err) {
//           conosle.log(err);
//         }
//         console.log('文件关闭成功');
//       });
//     });
//   });
// });

// 删除文件

// console.log('准备删除文件！');
// fs.unlink('input.txt', function(err) {
//   if (err) {
//     return console.log(err);
//   }
//   console.log('文件删除成功');
// });

// 创建目录

// console.log('创建目录 /tmp/test/apple');
// fs.mkdir('/tmp/test', {recursive: true}, function(err) {
//   if (err) {
//     return console.error(err);
//   }
//   console.log('目录创建成功')
// });

// 读取目录

// console.log('查看/tmp 目录');
// fs.readdir('/tmp/', function(err, files) {
//   if (err) {
//     return console.log(err);
//   }
//   files.forEach(function(file) {
//     console.log(file);
//   });
// });

// 删除目录

console.log('准备删除目录 /tmp/test');
fs.rmdir('/tmp/test', function(err) {
  if (err) {
    return console.log(err);
  }
  console.log('读取 /tmp 目录');
  fs.readdir('/tmp/', function(err, files) {
    if (err) {
      return console.error(err);
    }
    files.forEach(function(file) {
      console.log(file);
    })
  });
});