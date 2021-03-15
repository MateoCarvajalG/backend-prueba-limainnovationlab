const router = require ('express').Router()
const productosController = require ('../controllers/productosController')

router.get('/list',productosController.listar)
router.get('/producto/:id', productosController.one)

module.exports=router