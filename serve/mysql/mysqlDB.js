/* 

用navicat 创建表

CREATE TABLE `yiban`.`Untitled`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `sign` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
);


默认增长起点
alter table users AUTO_INCREMENT=10000;

*/

const mysql = require('mysql');

//建立连接的方法

const config = {
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'yiban'
}

const __connection = () => {
    const connection = mysql.createConnection(config);
    connection.connect();
    return connection;
}

const query = (sql, parmas = null) => {
    return new Promise(function (resolve, reject) {
        try {
            //1.获取数据库连接对象
            const connection = __connection();
            //2执行sql语句
            connection.query(sql, parmas, function (error, results, fields) {
                if (error) throw new Error(error);
                resolve(results);
            });
            //3关闭连接
            connection.end();
        } catch (e) {
            throw new Error(e);
        }
    })
}

module.exports = {
    query
} 
