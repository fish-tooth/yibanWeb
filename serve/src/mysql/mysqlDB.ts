import * as mysql from "mysql";

type OkPacket = mysql.OkPacket;

const config = {
  host: "localhost",
  user: "root",
  password: "123456",
  database: "yiban",
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
      connection.query(
        sql,
        parmas,
        function (error, results: any, fields) {
          if (error) throw new Error(String(error));
          resolve(results);
        }
      );
      //3关闭连接
      connection.end();
    } catch (e) {
      reject(e);
      throw new Error(String(e));
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
          if (error) throw new Error(String(error));
          resolve(results);
        }
      );
      //3关闭连接
      connection.end();
    } catch (e) {
      reject(e);
      throw new Error(String(e));
    }
  });
};

export { query, operate ,OkPacket};
