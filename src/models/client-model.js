const ClientModel = require('../config/database/databaseModel');

class Client {
  generateClient(nome, cpf, email) {
    return ClientModel.create({
      nome: nome,
      cpf: cpf,
      email: email,
    });
  }
  findClients() {
    return ClientModel.findAll();
  }

  findClientById(id) {
    return ClientModel.findAll({
      where: {
        id: id,
      },
    });
  }
  updateClient(id, body) {
    return ClientModel.update(body, {
      where: { id: id },
    });
  }

  deleteClient(id) {
    return ClientModel.destroy({
      where: { id: id },
    });
  }
}

module.exports = new Client();
