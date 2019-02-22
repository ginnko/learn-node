const fs = require('fs');
const child_process = require('child_process');

// 使用child_process.exec()创建子进程

// for (let i = 0; i < 3; i++) {
//   const workerProcess = child_process.exec(`node support.js ${i}`, function(error, stdout, stderr) {
//     if (error) {
//       console.log(error.stack);
//       console.log('Error code:', error.code);
//       console.log('Signal received: ', error.signal);
//     }
//     console.log('stdout', stdout);
//     console.log('stderr', stderr);
//   });

//   workerProcess.on('exit', function(code) {
//     console.log('子进程已退出，退出码 ' + code);
//   });
// }

// 使用child_process.spawn()创建子进程

// for (let i = 0; i < 3; i++) {
//   const workerProcess = child_process.spawn('node', ['support.js', i]);

//   workerProcess.stdout.on('data', function(data) {
//     console.log('stdout: ' + data);
//   });

//   workerProcess.stderr.on('data', function(data) {
//     console.log('stderr: ', data);
//   });

//   workerProcess.on('close', function(code) {
//     console.log('子进程已退出， 退出码 ' + code);
//   });
// }

// 使用child_process.fork()创建子进程
for (let i = 0; i < 3; i++) {
  const worker_process = child_process.fork('support.js', [i]);
  worker_process.on('close', function(code) {
    console.log('子进程已退出，退出码： ' + code);
  });
}