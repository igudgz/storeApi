const Client = require('../models/client-model');

module.exports = (app) => {
  // Create
  app.post('/client', async (req, res) => {
    const { nome, cpf, email } = req.body;
    await Client.generateClient(nome, cpf, email)
      .then((ok) => {
        res.json(ok);
      })
      .catch((err) => res.send(err));
  });
  // Read
  app.get('/client', async (req, res) => {
    await Client.findClients()
      .then((list) => res.json(list))
      .catch((err) => res.json(err));
  });
  app.get('/client/:id', async (req, res) => {
    let id = req.params.id;
    await Client.findClientById(id)
      .then((list) => res.json(list))
      .catch((err) => res.json(err));
  });

  //Update
  app.put('/client/:id', async (req, res) => {
    let id = req.params.id;
    let body = req.body;
    await Client.updateClient(id, body)
      .then((ok) => res.json(ok))
      .catch((err) => res.json(err));
  });

  //Delete
  app.delete('/client/:id', async (req, res) => {
    let id = req.params.id;
    Client.deleteClient(id)
      .then((done) => res.json(done))
      .catch((err) => res.json(err));
  });
};
