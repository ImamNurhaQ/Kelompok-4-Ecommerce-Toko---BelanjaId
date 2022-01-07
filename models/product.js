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

    static associate(models) {
      // define association here
      Product.belongsTo(models.Category),
      Product.hasMany(models.Transaction)
    }
  };
  Product.init({
    name: { 
    type: DataTypes.STRING,
    allowNull: false,
      validate: {
        notNull: true,
        notEmpty: true,
      },
    },
    description: {
    type: DataTypes.STRING,
    allowNull: false,
      validate: {
        notNull: true,
        notEmpty: true,
      },
    },
    stock: {
    type: DataTypes.INTEGER,
    allowNull: false,
      validate: {
        notNull: true,
        notEmpty: true,
      },
    },
    price: {
    type: DataTypes.INTEGER,
    allowNull: false,
      validate: {
        notNull: true,
        notEmpty: true,
      },
    },
    CategoryId: {
    type: DataTypes.INTEGER,
    allowNull: false,
      validate: {
        notNull: true,
        notEmpty: true,
      },
    },
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};