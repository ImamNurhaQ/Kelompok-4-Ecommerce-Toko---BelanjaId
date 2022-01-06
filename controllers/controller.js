const {Category, Product, Transaction, User} = require('../models')

class Controller {

    static showLogin(req, res){
        
        let error = req.query.errors?.split(',') || []
        res.render('login', {error: []})
    }


    static formRegister(req, res){
        res.render('register')
    }

    static registerUser(req, res){
        User.create({
            name : req.body.name,
            phoneNumber : +req.body.phoneNumber,
            address : req.body.address,
            userName : req.body.username,
            email : req.body.email,
            password : req.body.password,
            role : req.body.role
        })
        .then(()=>{
            res.redirect('register')
        })
        .catch(err =>{
            res.send(err)
        })

    }

}

module.exports = Controller;

