
const Sequelize=require('sequelize');
const sequelize=require('./Database');

const Product=sequelize.define('product',{
    id:{
      type:Sequelize.INTEGER,
      autoIncrement:true,
      allowNull:false,
      primaryKey:true
    },
     title:Sequelize.STRING,
     Price:{
      type:Sequelize.DOUBLE,
      allowNull:false,
     },
     imageUrl :{
      type:Sequelize.STRING,
      allowNull:false,
     }
  });
  
  module.exports=Product;
