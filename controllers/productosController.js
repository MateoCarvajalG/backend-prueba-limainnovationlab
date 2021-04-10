const db = require('../models')
const Sequelize = require('sequelize');
const Op = Sequelize.Op;


exports.listar = async (req,res,next) =>{
    try {
        const producto =  await db.Productos.findAll({
            include:{
                model: db.Categorias,
                as : "Categorias" ,
                required:true
            }
        })
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

exports.one = async(req,res,next) =>{
    try {
        const producto = await db.Productos.findOne({
            attributes:['name','url_img','precio','stock'],
            where : {id : req.params.id.slice(1)},
            include:{
                model: db.Categorias,
                as : "Categorias" ,
                attributes : ['name'],
                required:true
            } 
            })
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