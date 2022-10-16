const DB = require('../../mysql/mysqlDB');

const getUsers = async (ctx, next) => {
    let sql = 'select * from users'; //sql语句
    const result = await DB.query(sql);

    ctx.body = result;
}

exports.getUsers = getUsers