const express = require ('express')
const morgan = require('morgan')
const apiRouterCategorias = require ('./routes/categorias')
const apiRouterProductos = require ('./routes/productos')
const app =express()

app.use(morgan('dev'));

app.use('/categorias', apiRouterCategorias)
app.use('/productos', apiRouterProductos)

app.get('/',(req,res)=>{
    res.send('hola')
})
app.set("port", process.env.PORT || 5000);
app.listen(app.get("port"), () => {
  console.log("Server on port " + app.get("port") + " on dev");
});