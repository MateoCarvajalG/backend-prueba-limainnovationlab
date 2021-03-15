const db = require('../models')


exports.listar = async (req,res,next) =>{
    try {
        const producto =  await db.Categorias.findAll()
        if (producto){
            res.status(200).json(producto)
        }else{
            res.status(404).send({
                message: 'No hay articulos registradas'
            })
        }
    } catch (error) {
        res.status(500).send({
            message: 'Error!!'
        })
        next(error)
    }

}