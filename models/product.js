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
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    stock: {
      type:DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: true,
        notEmpty: true,
        cannotNull(value) {
          if (value === 0) {
            throw new Error("stock sudah kosong");
          }
        },
      },
    },
    price: DataTypes.INTEGER,
    CategoryId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};