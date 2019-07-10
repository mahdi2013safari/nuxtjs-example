const Sequelize = require("sequelize");
const db = require("../database/db");

module.exports = db.sequelize.define(
    'tbl_researches',
    {
        id : {
            type : Sequelize.INTEGER,
            primaryKey : true,
            autoIncrement : true
        },
        en_title : {
            type : Sequelize.STRING,

        },
        en_author : {
            type : Sequelize.STRING,

        },
        en_caption : {
            type : Sequelize.STRING,

        },
        url_file : {
            type : Sequelize.STRING,

        },

        user_views : {
            type : Sequelize.INTEGER,

        },
        created : {
            type : Sequelize.STRING,

        },

    },
    {
        timestamps : false
    }
);