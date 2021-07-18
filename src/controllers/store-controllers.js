const Store = require('../models/store-model');

module.exports = (app) => {
  // Create
  app.post('/store', async (req, res) => {
    const { cnpj, address, email, telephoneNumber, headcount } = req.body;
    await Store.generateStore(
      cnpj,
      address,
      email,
      telephoneNumber,
      headcount,
      res
    )
      .then((ok) => {
        res.json(ok);
      })
      .catch((err) => {
        res.json(err);
      });
  });
  // Read
  app.get('/store', async (req, res) => {
    await Store.findStores()
      .then((list) => res.json(list))
      .catch((err) => res.json(err));
  });
  app.get('/store/:id', async (req, res) => {
    let id = req.params.id;
    await Store.findStoreById(id)
      .then((list) => res.json(list))
      .catch((err) => res.json(err));
  });

  //Update
  app.put('/store/:id', async (req, res) => {
    let id = req.params.id;
    let body = req.body;
    await Store.updateStore(id, body)
      .then((ok) => res.json(ok))
      .catch((err) => res.json(err));
  });

  //Delete
  app.delete('/store/:id', async (req, res) => {
    let id = req.params.id;
    Store.deleteStore(id)
      .then((done) => res.json(done))
      .catch((err) => res.json(err));
  });
};
