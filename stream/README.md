# stream

1. stream有四种流类型：

    - Readable：可读操作
    - Writable：可写操作
    - Duplex：可读可写操作
    - Transform：操作被写入数据，然后读出结果(这个没明白是干嘛的)

2. 所有的Stream对象都是`EventEmitter`的实例，常用的事件有：

    - data：当有数据可读时触发
    - end：没有更多的数据可读时触发
    - error：在接收和写入过程中发生错误时触发
    - finish：所有数据已经被写入到底层系统时触发

3. 可读流

    使用`fs.createReadStream`创建的流是异步流。操作可读流的步骤：

    - 创建
    - 设置编码格式
    - 处理流事件

4. 可写流