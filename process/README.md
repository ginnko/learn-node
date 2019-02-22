# 进程

Node.js 是以单线程的模式运行的，但它使用的是事件驱动来处理并发，这样有助于我们在多核 cpu 的系统上创建多个子进程，从而提高性能。

每个子进程总是带有三个流对象：child.stdin, child.stdout 和child.stderr。他们可能会共享父进程的 stdio 流，或者也可以是独立的被导流的流对象。




创建子进程的函数

1. `child_process.exec(command[, options], callback)`

`child_process.exec`使用子进程执行命令，缓存子进程的输出，并将子进程的输出以 **回调函数** 参数的形式返回。exec()方法返回最大的缓冲区，并等待进程结束，一次性返回缓冲区的内容。

2. `child_process.spawn(command[, args][, options])`

`spawn()`方法返回流(stdout & stderr)，在进程返回大量数据时使用，进程一旦开始执行时，spawn()就开始接收响应。

3. `child_process.fork(modulePath[, args][, options])`

`child_process.fork`是spawn()方法的特殊形式，用于创建进程。返回的对象除了拥有ChildProcess实例的所有方法，还有一个内建的通信信道（与spawn方法不同的是，fork会在父进程与子进程之间，简历一个通信管道，用于进程之间的通信）。