'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Productos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Categorias,{foreignKey:"id", as : "Categorias"})
      // define association here
    }
  };
  Productos.init({
    name: DataTypes.STRING,
    url_img: DataTypes.STRING,
    precio: DataTypes.INTEGER,
    stock: DataTypes.INTEGER,
    categoria: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Productos',
  });
  return Productos;
};