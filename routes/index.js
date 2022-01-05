const routerBelanjaId = require('express').Router();
const controller = require('../controllers/controller')

routerBelanjaId.get('/belanjaId', controller.showLogin)



module.exports = routerBelanjaId