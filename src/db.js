const {Sequelize,DataTypes}=require('sequelize');

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        dialect: process.env.DB_DIALECT 
});
const conectarDB=async()=>{
    try {
        await sequelize.authenticate();
        console.log("Base de datos ok");
    } catch (error) {
        console.log('ERROR AL CONECTAR',error);
    }
};

module.exports={
 sequelize,
 DataTypes,
 conectarDB
};