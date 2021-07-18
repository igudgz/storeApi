const storeModel = require('../config/database/databaseModel');

class Store {
  constructor() {
    this.cnpjInvalid = [
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
    this.emailValidation = /\S+@\S+\.\S+/;
    this.telephoneNumberValidation = /\(\d{2}\)\ \d{4,5}\-\d{4}/;
    this.validations = (cnpj, email, telephoneNumber, res) => {
      let errors;
      if (cnpj.length != 14 || cnpj == '' || this.cnpjInvalid.includes(cnpj)) {
        errors = { message: 'CNPJ invalid, try again' };
      } else if (this.emailValidation.test(email) == false) {
        errors = { message: 'Email invalid, try again' };
      } else if (
        this.telephoneNumberValidation.test(telephoneNumber) == false
      ) {
        errors = {
          message:
            'Telephone invalid, try again (XX) XXXX-XXXX / (XX) XXXXX-XXXX',
        };
      }
      if (errors) {
        return new Promise((resolve, reject) => {
          reject(res.status(400).json(errors));
        });
      }
    };
  }
  generateStore(cnpj, address, email, telephoneNumber, headcount, res) {
    if (!this.validations(cnpj, email, telephoneNumber, res)) {
      return storeModel.create({
        cnpj: cnpj,
        address: address,
        email: email,
        telephoneNumber: telephoneNumber,
        headcount: headcount,
      });
    }
  }

  findStores() {
    return storeModel.findAll();
  }

  findStoreByCnpj(cnpj) {
    return storeModel.findAll({
      where: {
        cnpj: cnpj,
      },
    });
  }
  updateStore(cnpj, body, res) {
    let cnpjUpdated = body.cnpj;
    let { email, telephoneNumber } = body;
    if (!this.validations(cnpjUpdated, email, telephoneNumber, res)) {
      return storeModel.update(body, {
        where: { cnpj: cnpj },
      });
    }
  }

  deleteStore(cnpj) {
    return storeModel.destroy({
      where: { cnpj: cnpj },
    });
  }
}

module.exports = new Store();
