const routerBelanjaId = require('express').Router();
const controller = require('../controllers/controller')

routerBelanjaId.get('/', controller.home)
routerBelanjaId.get('/belanjaId', controller.showLogin)
routerBelanjaId.post('/belanjaId', controller.postLogin)
routerBelanjaId.post('/logout', controller.logout)
routerBelanjaId.get('/register', controller.formRegister)
routerBelanjaId.post('/register', controller.registerUser)
routerBelanjaId.get('/product', controller.listproduct)
routerBelanjaId.get('/product/add', controller.productForm)
routerBelanjaId.post('/product/add', controller.addProduct)
routerBelanjaId.get('/product/:CategoryId', controller.showProduct)
routerBelanjaId.post('/product/add', controller.addProduct)
routerBelanjaId.get('/product/delete/:id', controller.delete)

module.exports = routerBelanjaId