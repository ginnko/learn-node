const buf = Buffer.from('runoob', 'utf8');

console.log(buf.toString('hex'));
console.log(buf.toString('base64'));
console.log(buf.toString('utf8'));

// 创建buffer

const buf1 = Buffer.alloc(10);
const buf2 = Buffer.alloc(10, 1);
const buf3 = Buffer.allocUnsafe(10);
const buf4 = Buffer.from([1, 2, 3]);
const buf5 = Buffer.from('test', 'utf8');

// 写入缓冲区

const buf6 = Buffer.alloc(256);
len = buf.write('www.runoob.coom');
console.log(`写入字节数：${len}`);

// 从缓冲区读取数据

const buf7 = Buffer.alloc(26);
for (let i = 0; i < 26; i++) {
  buf7[i] = i + 97;
}

console.log(buf7.toString('ascii'));
console.log(buf7.toString('ascii',0,5));
console.log(buf7.toString('utf8',0,5));
console.log(buf7.toString(undefined,0,5));

// 将Buffer转换为JSON对象

const buf8 = Buffer.from([0x1,0x2,0x3,0x4,0x5]);
const json = JSON.stringify(buf8);
console.log(json);

const copy = JSON.parse(json, (key, value) => {
  console.log('currentValue:', value);
  return value && value.type === 'Buffer' ?
    Buffer.from(value.data) :
    value;
});

console.log(copy);

// 缓冲区合并

const buffer1 = Buffer.from('菜鸟教程');
const buffer2 = Buffer.from('www.runoob.com');
const buffer3 = Buffer.concat([buffer1, buffer2]);
console.log('buffer3:', buffer3.toString());