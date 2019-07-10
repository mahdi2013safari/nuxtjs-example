const Sequelize = require("sequelize");
const db = require("../database/db");

module.exports = db.sequelize.define(
    'users',
    {
        id : {
            type : Sequelize.INTEGER,
            primaryKey : true,
            autoIncrement : true
        },
        name : {
            type : Sequelize.STRING,

        },
        lastname : {
            type : Sequelize.STRING,
        },
        email : {
            type : Sequelize.STRING,

        }

    },
    {
        timestamps : false
    }
);