'use strict';
const {
  Model
} = require('sequelize');
const { hashingPassword } = require('../helpers/encryptPass');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The models/index file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Transaction)
    }
  };
  User.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        notEmpty: true,
        notNull: true
      }
    },
    phoneNumber: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        notEmpty: true,
        notNull: true
      }
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        notEmpty: true,
        notNull: true
      }
    },
    userName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        notEmpty: true,
        notNull: true
      }
    },
    email: {
      type:DataTypes.STRING,
      isUnique :true,
      allowNull:false,
      validate:{
        isEmail : true,
        notEmpty: true,
        notNull: true
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        notEmpty: true,
        notNull: true,
        len: { 
          args: [7, 42],
          msg: "The password length should be between 7 and 42 characters."
        }
      }
    },
    role: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
    hooks:{
      beforeCreate(user){
        user.password = hashingPassword(user.password)
      }
    }
  });
  return User;
};