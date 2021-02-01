const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = new Sequelize('test','root','root',{
    host: 'localhost',
    dialect: 'mysql'
});

sequelize.authenticate().then(()=>{
    console.log("Conectado")
}).catch((err)=>{
    console.log(`Falha ao conectar, erro: ${err}`)
})



module.exports = {sequelize, Sequelize, DataTypes};