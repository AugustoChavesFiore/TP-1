const { sequelize, DataTypes } = require("../db");

const Imagenes=sequelize.define('Imagen',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    imgName:{
        type:DataTypes.STRING,
        allowNull:false
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
    tableName: 'imagenes'}
    );

    Imagenes.sync({force:false}).then(()=>{
        console.log('Tabla de Reservas creada');
    });
    


