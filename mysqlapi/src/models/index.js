const dbconfig = require('../db/db.config.js');

const Sequelize = require('sequelize')
const sequelize = new Sequelize(dbconfig.database, dbconfig.user, dbconfig.password, {
  host: dbconfig.host,
  dialect: dbconfig.dialect,
  operatorsAliases: false,
  pool: {
    max: dbconfig.pool.max,
    min: dbconfig.pool.min,
    acquire: dbconfig.pool.acuire,
    idle: dbconfig.pool.idle
  }
})

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.employee = require("./employee")(sequelize, Sequelize);

module.exports = db;