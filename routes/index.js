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
        res.redirect('/belanjaId')
    }else{
        next()
    }
    
}

routerBelanjaId.get('/', beforeLogin, controller.home)
routerBelanjaId.get('/belanjaId', afterLogin, controller.showLogin)
routerBelanjaId.post('/belanjaId', controller.postLogin)
routerBelanjaId.post('/logout', beforeLogin, controller.logout)
routerBelanjaId.get('/register', controller.formRegister)
routerBelanjaId.post('/register', controller.registerUser)

module.exports = routerBelanjaId