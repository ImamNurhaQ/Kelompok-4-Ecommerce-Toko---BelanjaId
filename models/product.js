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

    static stockNotNull() {
      return sequelize.query(
        `SELECT "Products".id, "Products".name, description, price, stock FROM "Products"
        JOIN "Categories"
        ON "Products"."CategoryId" = "Categories"."id"
        WHERE "Products"."stock" != 0
        ORDER BY "Products".name asc`,
        {
          type: QueryTypes.SELECT,
        }
      );
    }

    static dealTransaction({id, stock}) {
      return sequelize.query(`UPDATE "Products" SET stock = stock - ${stock} WHERE id = ${id}`, {
        type: QueryTypes.UPDATE,
      });
    }



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
      type:DataTypes.INTEGER,
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