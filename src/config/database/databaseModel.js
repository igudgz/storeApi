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
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  telephoneNumber: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  headcount: {
    type: Sequelize.STRING,
  },
});
Store.sync();

module.exports = Store;
