const routerBelanjaId = require('express').Router();
const controller = require('../controllers/controller')

const beforeLogin = (req, res, next) => {
    if (req.session.user) {
        next()
    } else {
        res.redirect('/belanjaId')
    }
}

const afterLogin = (req, res, next) => {
    if(req.session.user){
        res.redirect('/')
    }else{
        next()
    }
}

routerBelanjaId.get('/', beforeLogin, controller.home)
routerBelanjaId.get('/belanjaId', afterLogin, controller.showLogin)
routerBelanjaId.post('/belanjaId', controller.postLogin)
routerBelanjaId.get('/logout', beforeLogin, controller.logout)
routerBelanjaId.get('/register', controller.formRegister)
routerBelanjaId.post('/register', controller.registerUser)
routerBelanjaId.get('/product', controller.listproduct)
routerBelanjaId.get('/product/add', controller.productForm)
routerBelanjaId.post('/product/add', controller.addProduct)
routerBelanjaId.get('/product/:CategoryId', controller.showProduct)
routerBelanjaId.post('/product/add', controller.addProduct)
routerBelanjaId.get('/product/delete/:id', controller.delete)

module.exports = routerBelanjaId