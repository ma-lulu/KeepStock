const Sequelize= require("sequelize");
const db = require("./dao/db")
const Uber = require("")

const Usuario = db.define(
    'Usuario',{
        id:{
            type: Sequelize. INTEGER,
            autoIncrement: true,
            allowNul: false,
            primaryKey: true
        },
        nome:{
            type: Sequelize. STRING,
            allowNull: false
        },
        sobrenome:{
            type: Sequelize. STRING,
            allowNul: false
        },
        email:{
            type: Sequelize. STRING,
            allowNull: false        
        }
    }
)