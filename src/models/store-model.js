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
  }
  generateStore(cnpj, address, email, telephoneNumber, headcount, res) {
    //validations
    let errors;
    if (cnpj.length != 14 || cnpj == '' || this.cnpjInvalid.includes(cnpj)) {
      errors = { mensagem: 'CNPJ inválido, tente novamente' };
    } else if (this.emailValidation.test(email) == false) {
      errors = { mensagem: 'Email inválido, tente novamente' };
    } else if (this.telephoneNumberValidation.test(telephoneNumber) == false) {
      errors = {
        mensagem:
          'Telefone inválido, tente novamente (XX) XXXX-XXXX / (XX) XXXXX-XXXX',
      };
    }

    if (errors) {
      return new Promise((resolve, reject) => {
        reject(res.status(400).json(errors));
      });
    } else {
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

  findStoreById(id) {
    return storeModel.findAll({
      where: {
        id: id,
      },
    });
  }
  updateStore(id, body) {
    return storeModel.update(body, {
      where: { id: id },
    });
  }

  deleteStore(id) {
    return storeModel.destroy({
      where: { id: id },
    });
  }
}

module.exports = new Store();
