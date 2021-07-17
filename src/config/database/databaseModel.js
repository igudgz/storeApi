//import lib
const Sequelize = require('sequelize');

//import db
const database = require('./database');

const Client = database.define('clients', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  nome: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  cpf: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
  },
});
Client.sync();

module.exports = Client;
