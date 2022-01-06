const {Category, Product, Transaction, User} = require('../models')
const {comparePassword} = require('../helpers/encryptPass')

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
                userName: req.body.userName,
            },
        })
        .then(user => {
            console.log(user);
            if(user && comparePassword(req.body.password, user.password)){
                req.session.user = user.userName
                res.redirect('/')
            }
            
        })
        .catch( error => {
            console.log( error)
            console.log(err.message);
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
        
        User.create({
            name : req.body.name,
            email : req.body.email,
            phoneNumber : +req.body.phoneNumber,
            userName : req.body.userName,
            password : req.body.password,
            address : req.body.address,
            role : req.body.role
        })
        .then((result)=>{
            res.redirect('/register')
        })
        .catch(err =>{
            // console.log(err);
            // console.log(err.message);
            res.send(err)
        })
    }



}

module.exports = Controller;

