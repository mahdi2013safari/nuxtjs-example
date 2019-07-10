const Sequelize = require("sequelize")
const db  = {}
const sequelize = new Sequelize("testexpress","root","", {
    host: "localhost",
    dialect: "mysql",
    define: {
        charset: 'utf8',
        collate: 'utf8_general_ci', 
        // timestamps: true
      },
    logging:false,
    operatorsAliases: false,
    pool : {
        max:5,
        min:0,
        acquire:30000,
        idle: 10000
    },
});


db.sequelize  = sequelize;
db.Sequelize  = Sequelize;
sequelize.query("SET NAMES utf8")
module.exports = db;