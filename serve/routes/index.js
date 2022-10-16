const Router = require('koa-router');
const user = require('./user');

const router = new Router();

router.get('/api/getUsers', user.getUsers)

// router.post('/api/getUsers', user.getUsers)

module.exports = {
    routes: router.routes(),
}
