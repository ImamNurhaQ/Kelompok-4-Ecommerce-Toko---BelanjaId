'use strict';
const {
  Model, QueryTypes
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */

    //   static getCategory(name){
    //   const data = sequelize.query(`SELECT e."name", e."description", e.stock, e.price, s.id, s.name, from "Products" e
    //     JOIN "Categories" c
    //     ON e."CategoryId" = c.id
    //     WHERE e.position LIKE '%${name}%'
    //     ORDER BY  e."name";`, {type : QueryTypes.SELECT})
    //     return data
    // }

    static associate(models) {
      // define association here
      Product.belongsTo(models.Category),
      Product.hasMany(models.Transaction)
    }
  };
  Product.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    stock: DataTypes.INTEGER,
    price: DataTypes.INTEGER,
    CategoryId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};