const {Category, Product, Transaction, User} = require('../models')

class Controller {

    static showLogin(req, res){
        
        let error = req.query.errors?.split(',') || []
        res.render('login', {error: []})
    }

}

module.exports = Controller;

