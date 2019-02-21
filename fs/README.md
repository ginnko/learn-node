# 文件系统

感觉这个模块的下的东西需要用到的话搜下文档才能逐渐记住熟悉起来。

1. 异步读取文件

```js
fs.readFile(file, callback)

//其中callback
//第一个参数：err
//第二个参数：数据，这里获取到的数据是Buffer格式的
```

2. 打开文件

```js
fs.open(path, falgs, mode, callback)

//path：文件路径
//flags：文件打开的行为，目测r+用的比较多，表示以读写模式打开文件，如果文件不存在则抛出异常
//mode：文件权限，默认权限为0666（可读，可写）
//callback：回调函数，带有两个参数，第一个参数为错误对象，第二个参数为打开文件的描述符，文件描述符是个数字
```
3. 获取文件信息

```js
fs.stat(path, callback)

// path - 文件路径
// callback - 回调函数，带有两个参数，第一个是错误对象，第二个是fs.stats对象
```
stats类中常用的方法：

  - stats.isFile()
  - stats.isDirectory()

4. 写入文件

```js
fs.writeFile(file, data, options, callback)

// file - 文件名或文件描述符，这里可以用文件描述符诶
// data - 要写入文件的数据，可以是字符串，也可以是缓冲对象
// options - 对象形式，包含 {encoding, mode, flag}，默认编码为utf8, 模式为0666 ，flag 为'w'
// callback - 只包含错误信息参数，在写入失败时返回
```

5. 另一种异步读取文件的方法

```js
fs.read(fd, buffer, offset, length, position, callback)

// fd - 通过fs.open()方法返回的文件描述符
// buffer - 数据写入缓冲区
// offset - 缓冲区写入的写入偏移量
// length - 要从文件中读取的字节数
// position - 文件读取的起始位置，如果position的值为null，则会从当前文件指针的位置读取
// callback - 有三个参数err，bytesRead，buffer，err为错误信息，bytesRead表示读取的字节数，buffer为缓冲区对象
```

6. 关闭文件

```js
fs.close(fd, calback)

// fd - 通过fs.open()方法返回的文件描述
// callback - 回调函数，没有参数！！！
```

7. 截取文件

```js
fs.ftruncate(fd, len, callback)

// fd - 通过fs.open()方法返回的文件描述符
// len - 文件内容截取的长度
// callback - 回调函数，没有参数
```

发现一个问题，设置一次len之后，往大了调没有变化，往小了调才有变化，这是神马原因？

8. 删除文件

```js
fs.unlink(path, callback)

// path - 文件路径
// callback
```

9. 创建目录

```js
fs.mkdir(path, options, callback)

// path - 文件路径
// options - {recursive：默认为false，是否以递归的方式创建目录, mode：设置目录权限，默认为07777}
```

关于recursive的作用，看[这里](https://blog.csdn.net/m0_37263637/article/details/84842766)

这个要在*V10*版本上才能用。

10. 读取目录

```js
fs.readdir(path, callback)

// callback - 带有两个参数err，files，err为错误信息，files为目录下的文件数组列表
```

11. 删除目录

```js
fs.rmdir(path, callback)
```
