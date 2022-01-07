'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Transaction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
  

    static associate(models) {
      // define association here
      Transaction.belongsTo(models.Product),
      Transaction.belongsTo(models.User)
    }
  };
  Transaction.init({
    reviewProduct: DataTypes.STRING,
    buyingDate: DataTypes.DATE,
    totalProduct: DataTypes.INTEGER,
    totalPrice: DataTypes.INTEGER,
    ProductId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Transaction',
    hooks:{
      beforeCreate : (transaction)=>{
        let createDate = new Date().getTime();
        transaction.buyingDate = `${createDate}`
      }
    }
  });
  return Transaction;
};