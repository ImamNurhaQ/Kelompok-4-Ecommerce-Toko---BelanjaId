const router = require('express').Router()
const controller = require('../controllers/controller')

router.get('/', controller.listproduct)
router.get('/add', controller.productForm)
router.post('/add', controller.addProduct)
router.get('/:CategoryId', controller.showProduct)
router.get('/transaction/:ProductId', controller.formTransaction)
router.get('/transaction/:ProductId/deal', controller.transactionSuccsess)
router.get('/delete/:id', controller.delete)

module.exports = router