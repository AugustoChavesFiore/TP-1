const { sequelize, DataTypes } = require("../../db");


const imagenes=sequelize.define('Imagen',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    img
})