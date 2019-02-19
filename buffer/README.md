# Buffer
Buffer类用来创建一个专门存放二进制数据的缓存区。每当需要在node.js中处理I/O操作中的移动数据时，就可以使用Buffer库。原始数据存储在Buffer类中。一个Buffer类似于一个整数数组，**但它对应于V8堆内存之外的一块原始内存**。

*注意：创建Buffer对象推荐使用Buffer.from()，不要直接使用new Buffer()。*

1. Buffer对象与字符编码

通过使用显式的字符编码，就可以在Buffer实例与普通的js字符串之间进行相互转换。

2. 创建Buffer

3. 写入缓冲区

```js
buf.write(string,offset,length,encoding)

<!-- 解释 -->
string：写入缓冲区的字符串
offset：缓冲区开始写入的索引值，默认为0
length：写入的字节数，默认为buffer.length，注意是字节数！字节数！字节数！
encoding：使用的编码，默认为'utf8'

这个写入过程的解释：根据encoding的字符编码写入string到buf中的offset位置。length参数是写入的字节数。如果buf没有足够的空间保存整个字符串，则会写入string的一部分。
```

4. 从缓冲区读取数据

```js
buf.toString(encoding,start,end)

encoding：使用的编码，默认为utf8
start：指定开始读取的索引位置，默认为0
end：结束位置，默认为缓冲区的末尾

返回值：解码缓冲区数据并使用指定的编码返回字符串
```
5. 将Buffer转换为JSON对象

可以使用两种方式：

```js
buf.toJSON()

JSON.stringify(buf)
```
6. 缓冲区合并

`Buffer.concat(list[, totalLength])`

7. 缓冲区比较

`buf.compare(otherBuffer)`

8. 拷贝缓冲区

*个人感觉拷贝语法好怪异*

```js
buf.copy(targetBuffer, targetStart, sourceStart, sourceEnd)

targetBuffer：要拷贝（插入）的Buffer对象
targetStart：数字， 可选， 默认0
sourceStart：数字，可选，默认0
sourceEnd：数字，可选，默认buffer.length
```

9. 缓冲区裁剪

`buf.slice(start[, end])`

返回一个新的缓冲区，它和旧的缓冲区指向同一块内存，但是从索引start到end的位置剪切

10. 缓冲区长度

`buf.length`