const { sequelize, DataTypes } = require("../db");

const imgCloud=sequelize.define('cloud',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    imgUrl:{
        type:DataTypes.STRING,
        allowNull:false
    },
    publicId:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true
    },
    estado:{
        type:DataTypes.BOOLEAN,
        defaultValue:true
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    deletedAt: {
        type: DataTypes.DATE,
        allowNull: true
    }
    }, 
    {
    createdAt: true,
    updatedAt: true,
    deletedAt: true,
    tableName: 'cloud'}
    );

    imgCloud.sync({force:false}).then(()=>{
        console.log('Tabla de cloud creada');
    });
    


module.exports = imgCloud;