
const Sequelize=require('sequelize');
const sequelize=require('./Database');

const User=sequelize.define('user',{
    id:{
      type:Sequelize.INTEGER,
      autoIncrement:true,
      allowNull:false,
      primaryKey:true
    },
    username:Sequelize.STRING,
    password:Sequelize.STRING,
     email:Sequelize.STRING,
     OTP:Sequelize.STRING

  });
  


module.exports=User;