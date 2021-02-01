const db = require('./db')

const User = db.sequelize.define('user',{
    firstName:{
        type: db.DataTypes.STRING,
        allowNull: false
    },
    lastName:{
        type: db.DataTypes.STRING,
        allowNull: false
    }
})

//User.sync();

module.exports = User;
