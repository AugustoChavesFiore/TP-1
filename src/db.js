const { Sequelize, DataTypes } = require('sequelize');

// Nueva instancia de conexión a BD
const sequelize = new Sequelize(
    "imagenestp1",
    "root",
    '',
    {
        host: "localhost",
        dialect: 'mysql' /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
    });


const conectarDB = async () => {

    try {
        await sequelize.authenticate()
        console.log('Base de datos Conectada');
    } catch (error) {
        console.log('ERROR AL CONECTAR DB: ', error);
    }

};

module.exports = {
    sequelize,
    DataTypes,
    conectarDB
}