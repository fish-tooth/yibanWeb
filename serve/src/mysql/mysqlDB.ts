import * as mysql from "mysql";

type OkPacket = mysql.OkPacket;

const config = {
  host: "localhost",
  user: "root",
  password: "123456",
  database: "yiban",
  charset: "utf8mb4",
};

const __connection = () => {
  const connection = mysql.createConnection(config);
  connection.connect();
  return connection;
};

// 查
const query = (sql: string, parmas: object = null) => {
  return new Promise<any>(function (resolve, reject) {
    try {
      //1.获取数据库连接对象
      const connection = __connection();
      //2执行sql语句
      connection.query(sql, parmas, function (error, results: any, fields) {
        if (error) {
          console.log("数据库错误:", error);
          reject({
            code:502,
            message:"数据库错误"
          });
        } else {
          resolve(results);
        }
      });
      //3关闭连接
      connection.end();
    } catch (e) {
      console.log("try catch数据库错误:", e);
      reject({
        code:502,
        message:"数据库错误"
      });
    }
  });
};

// 增删改
const operate = (sql: string, parmas: object = null) => {
  return new Promise<OkPacket>(function (resolve, reject) {
    try {
      //1.获取数据库连接对象
      const connection = __connection();
      //2执行sql语句
      connection.query(
        sql,
        parmas,
        function (error, results: OkPacket, fields) {
          if (error) {
            console.log("数据库错误:", error);
            reject({
              code:502,
              message:"数据库错误"
            });
          } else {
            resolve(results);
          }
        }
      );
      //3关闭连接
      connection.end();
    } catch (e) {
      console.log("try catch数据库错误:", e);
      reject({
        code:502,
        message:"数据库错误"
      });
    }
  });
};

export { query, operate, OkPacket };
