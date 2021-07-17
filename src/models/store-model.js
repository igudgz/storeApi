const storeModel = require('../config/database/databaseModel');

class Store {
  generateStore(cnpj, address, email, telephoneNumber, headcount) {
    return storeModel.create({
      cnpj: cnpj,
      address: address,
      email: email,
      telephoneNumber: telephoneNumber,
      headcount: headcount,
    });
  }
  findStore() {
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
