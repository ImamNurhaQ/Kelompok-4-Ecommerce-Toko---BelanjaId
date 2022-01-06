const routerBelanjaId = require('express').Router();
const controller = require('../controllers/controller')


routerBelanjaId.get('/', controller.home)
routerBelanjaId.get('/belanjaId', controller.showLogin)
routerBelanjaId.post('/belanjaId', controller.postLogin)
routerBelanjaId.post('/logout', controller.logout)
routerBelanjaId.get('/register', controller.formRegister)
routerBelanjaId.post('/register', controller.registerUser)

module.exports = routerBelanjaId