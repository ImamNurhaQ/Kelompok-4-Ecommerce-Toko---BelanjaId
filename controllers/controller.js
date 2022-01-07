const {Category, Product, User} = require('../models')
const {comparePassword} = require('../helpers/encryptPass')

class Controller {


/****************************handle home*********************************/

    static home(req, res){
        Category.findAll()
        .then(data => {
            res.render('home', {data, name:req.session.user})
        }).catch(err => {
            res.send(err)
        });
    }

    static listproduct(req, res){
        Product.findAll()
        .then(results => {
            res.render('listProduct', {results})
        }).catch(err => {
            res.send(err)
        });
    }


    static showProduct(req, res){
        Product.stockNotNull()
        .then(() => {
            return Product.findAll({
                where : {
                    CategoryId : Number(req.params.CategoryId)
                },
                order : [
                    ['name', 'ASC']
                ],
            })
        })
        .then(results => {
            res.render('product', { results })
        })
        .catch(err => {
            res.send('Ada yg tidak beres..\n' + err.message)
        });
    }

/********************************************************************************/


/****************************handle transaction*********************************/

    static formTransaction(req, res){
        
        Product.findByPk(+req.params.ProductId,{
        })
        .then((result) =>{
            res.render('transaction', {product:result})
            
            
        })
        
    }

    static transactionSuccsess(req, res){
        let obj = {
            id: req.params.ProductId,
            stock: req.query.stock
        }
        Product.dealTransaction(obj)
        .then(() => res.redirect(`/`))
        .catch((err) => res.send(err.message));
    }


/********************************************************************************/


/******************handle add product and delete product*************************/

    static productForm(req, res) {
        Category.findAll({})
        .then(result =>{
            res.render('productForm', {result, name:req.body.name})
        })
        .catch(err =>{
            res.send(err)
        })
    }




    static addProduct(req, res){
        
        Product.create({
            name: req.body.name,
            description: req.body.description,
            stock: req.body.stock,
            price: req.body.price,
            CategoryId : +req.body.CategoryId
        })
        .then(result => {
            res.redirect(`/product`)
        })
        .catch(err => {
            // console.log(err, 'ADA ERROR');
            res.send(err)
        })
    }


    static delete(req, res){
        Product.destroy({
            where: {
                id: Number(req.params.id)
            }
        })
        .then(result => {
            res.redirect(`/product`)
        })
        .catch(err => {
            res.send(err.message)
        })
    }

/********************************************************************************/


/***************************handle login and register****************************/

    static showLogin(req, res){
        
        let err = req.query.errors || []
        res.render('login', {err})
        
    }

    static postLogin(req, res){
        User.findOne({
            where: {
                userName: req.body.userName,
            },
        })
        .then(user => {
            if(user && comparePassword(req.body.password, user.password)){
                req.session.user = user.userName
                res.redirect('/')
            } else {
                throw new Error('Invalid username and password')
            }
            
        })
        .catch( error => {
            res.redirect('/belanjaId?err=' + error.message )
            console.log(error);
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
            phoneNumber : req.body.phoneNumber,
            userName : req.body.userName,
            password : req.body.password,
            address : req.body.address,
            role : req.body.role
        })
        .then((result)=>{
            res.redirect('/belanjaId')
        })
        .catch(err =>{
            res.redirect('/register?err=' + err.message )
            // console.log(err);
            // console.log(err.message)
            res.send(err)
        })
    }

/********************************************************************************/

}

module.exports = Controller;

