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

    static listproduct(req, res){
        Product.findAll()
        .then(results => {
            res.render('listProduct', {results})
        }).catch(err => {
            res.send(err)
        });
    }


    static showProduct(req, res){
        Category.findByPk(+req.params.CategoryId)
        .then(() => {
            Product.findAll({
                where : {
                    CategoryId : Number(req.params.CategoryId)
                },
                order : [
                    ['name', 'ASC']
                ],
            })
            .then(results => {
                res.render('product', { results })
            })
        })
        .catch(err => {
            res.send('Ada yg tidak beres..\n' + err.message)
        });
    }

    static productForm(req, res) {
        Category.findAll()
        .then(result =>{
            res.render('productForm', {result})
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
            CategoryId : +req.params.CategoryId
        })
        .then(result => {
            res.redirect(`/product`)
        })
        .catch(err => {
            console.log(err, 'ADA ERROR');
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

