//import lib
const Sequelize = require('sequelize');

//import db
const database = require('./database');

const Store = database.define('stores', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  cnpj: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  address: {
    type: Sequelize.STRING,
  },
  email: {
    type: Sequelize.STRING,
  },
  telephoneNumber: {
    type: Sequelize.STRING,
  },
  headcount: {
    type: Sequelize.INTEGER,
  },
});
Store.sync();

module.exports = Store;
