const router = require ('express').Router()
const categoriasController = require ('../controllers/categoriasController')

router.get('/list',categoriasController.listar)

module.exports=router