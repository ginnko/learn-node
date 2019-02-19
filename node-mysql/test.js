const mysql = require('mysql');
const connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: '1234',
  database: 'learn_node',
  port: '3306'
});

connection.connect();

// 查询数据
const sql = 'select * from websites';

connection.query(sql, function(err, result) {
  if (err) {
    console.log('[SELECT ERROR] - ', err.message);
    return;
  }
  console.log('-----------------SELECT-------------------');
  console.log(result);
  console.log('------------------------------------------');
});

// connection.end();

// 插入数据
// 注意：要使用?作为占位符
// const addSql = 'insert into websites(id,name,url,alexa,country) values (?,?,?,?,?)';
// const addSqlParams = [6, 'Github', 'https://github.com', 10, 'USA'];
// connection.query(addSql, addSqlParams, function(err, result) {
//   if (err) {
//     console.log('[INSERT ERROR] - ', err.message);
//     return;
//   }
//   console.log('-----------------------INSERT-----------------------');
//   console.log('INSERT ID:', result);
//   console.log('----------------------------------------------');
// });

// 更新数据
// const modSql = 'update websites set alexa = ? where id=?';
// const modSqlParams = [8, 6];
// connection.query(modSql, modSqlParams, function(err, result) {
//   if (err) {
//     console.log('[UPDATE ERROR] - ', err.message);
//     return;
//   }
//   console.log('-----------------------UPDATE-----------------');
//   console.log('UPDATE affectedRows', result.affectedRows);
//   console.log('----------------------------------------------');
// });

// 删除数据
const delSql = 'delete from websites where id=?';
const delSqlParams = [6];
connection.query(delSql, delSqlParams, function(err, result) {
  if (err) {
    console.log('[DELETE ERROR] - ', err.message);
    return;
  }
  console.log('--------------------------DELETE--------------------------');
  console.log('DELETE affectedRows', result.affectedRows);
  console.log('------------------------------------------------------');
});


connection.end();