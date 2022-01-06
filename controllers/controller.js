const {Category, Product, Transaction, User} = require('../models')

class Controller {

    static home(req, res){
        Category.findAll()
        .then(data => {
            res.render('home', {data})
        }).catch(err => {
            res.send(err)
        });
    }

    // static storeDetail(req, res){
    //     Employee.sum('salary', {
    //         where : {
    //             storeId: +req.params.storeId
    //         }
    //     })
    //     .then((employee) => {
    //         Store.findByPk(+req.params.storeId)
    //         .then((store) => {
    //             Employee.findAll({
    //                 where : {
    //                     storeId: +req.params.storeId
    //                 },
    //                 order : [
    //                     ['position', 'ASC']
    //                 ],
    //             })
    //             .then((results) => {
    //                 res.render("storeDetail", { results, store, employee, notif: req.query.notif || "" });
    //             })
    //         })
    //     })
    //     .catch((err) => {
    //         res.send(err.message)
    //     })
    // }

    static showLogin(req, res){
        
        let error = req.query.errors?.split(',') || []
        res.render('login', {error: []})
    }

    static postLogin(req, res){
        User.findOne({
            where: {
                email: req.body.email,
                password: req.body.password
            },
        })
        .then(result => {
            res.redirect('/')
        })
        .catch( error => {
            console.log( error, 'ADA ERROR');
            res.send( error )
        })
    }

    static logout(req, res){

        req.session.destroy(err => {
            if (err) res.send(err)
            res.redirect('/belanjaId')
        })
    }

    static formRegister(req, res){
        res.render('register')
    }

    static registerUser(req, res){
        // console.log(req.body);
        User.create({
            name : req.body.name,
            phoneNumber : req.body.phoneNumber,
            address : req.body.address,
            userName : req.body.username,
            email : req.body.email,
            password : req.body.password,
            role : req.body.role
        })
        .then((result)=>{
            console.log(result);
            res.redirect('/')
        })
        .catch(err =>{
            res.send(err)
        })
    }

}

module.exports = Controller;

