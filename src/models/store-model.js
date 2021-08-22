//import lib
const Sequelize = require('sequelize');

//import db
const database = require('../config/database/database');

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
    validate: {
      len: [14],
      cnpjValid: function (cnpj) {
        let cnpjInvalid = [
          '00000000000000',
          '11111111111111',
          '22222222222222',
          '33333333333333',
          '44444444444444',
          '55555555555555',
          '66666666666666',
          '77777777777777',
          '88888888888888',
          '99999999999999',
        ];
        if (cnpj == undefined || cnpj == '' || cnpjInvalid.includes(cnpj)) {
          throw new Error('CNPJ invalid, try again pls');
        } else {
        }
      },
    },
  },
  address: {
    type: Sequelize.STRING,
  },
  email: {
    type: Sequelize.STRING,
    validate: {
      isEmail: {
        args: true,
        msg: 'Email invalid! Try again',
      },
    },
  },
  phone: {
    type: Sequelize.INTEGER,
    validate: {
      isNumeric: {
        args: true,
        msg: 'Phone invalid! Try again DDDNUMBER',
      },
      isInt: {
        args: true,
        msg: 'Phone invalid! Try again DDDNUMBER',
      },
      len: [10 - 11],
    },
  },
  headcount: {
    type: Sequelize.INTEGER,
  },
});
Store.sync().catch((err) => console.log(err));

module.exports = Store;
