'use strict'

const Sequelize = require('sequelize')
require('dotenv').config()

const sequelizeInstance = new Sequelize(
    process.env.DB, process.env.USER, process.env.PASSWORD, 
    {
        host: process.env.HOST,
        dialect: process.env.DIALECT,
        port: process.env.MY_SQL_PORT,
        dialectOption: {
            connectionTimeout: 10000
        },
        pool: {
            max: parseInt(process.env.POOL__MAX),
            min: parseInt(process.env.POOL__MIN),
            acquire: parseInt(process.env.POOL__ACQUIRE),
            idle: parseInt(process.env.POOL__IDLE)
        }
    }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelizeInstance = sequelizeInstance;
db.user = require('../models/usuarioModels')(sequelizeInstance, Sequelize);

module.exports = db;
