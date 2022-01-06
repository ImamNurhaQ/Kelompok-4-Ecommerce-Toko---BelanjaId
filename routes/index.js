const routerBelanjaId = require('express').Router();
const controller = require('../controllers/controller')

routerBelanjaId.get('/belanjaId', controller.showLogin)

routerBelanjaId.get('/registers', controller.formRegister)
routerBelanjaId.post('/registers', controller.registerUser)

module.exports = routerBelanjaId