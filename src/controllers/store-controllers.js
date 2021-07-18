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
      .then((result) => {
        res
          .status(200)
          .json({ result, message: 'Store successfully added', error: false });
      })
      .catch((err) => {
        res.status(400).json({ err, error: true });
      });
  });
  // Read
  app.get('/store', async (req, res) => {
    await Store.findStores()
      .then((result) => {
        if (result.length > 0) {
          res.status(200).json({ result, error: false });
        } else {
          res.status(400).json({
            message: 'There are no stores in the system',
            error: true,
          });
        }
      })
      .catch((err) => res.status(400).json(err));
  });
  app.get('/store/:cnpj', async (req, res) => {
    let cnpj = req.params.cnpj;
    await Store.findStoreByCnpj(cnpj)
      .then((result) => {
        if (result.length > 0) {
          res.status(200).json({ result, error: false });
        } else {
          res.status(400).json({
            message: 'There is no store with this cnpj',
            error: true,
          });
        }
      })
      .catch((err) => res.status(400).json(err));
  });

  //Update
  app.put('/store/:cnpj', async (req, res) => {
    let cnpj = req.params.cnpj;
    let body = req.body;
    await Store.updateStore(cnpj, body, res)
      .then((result) => {
        if (result) {
          res.status(200).json({
            message: 'Store successfully updated',
            error: false,
          });
        } else {
          res.status(400).json({
            message: 'There is no store with this cnpj',
            error: true,
          });
        }
      })
      .catch((err) => res.status(400).json({ err, error: true }));
  });

  //Delete
  app.delete('/store/:cnpj', async (req, res) => {
    let cnpj = req.params.cnpj;
    Store.deleteStore(cnpj)
      .then((result) => {
        if (result) {
          res.status(200).json({
            message: 'Store successfully deleted',
            error: false,
          });
        } else {
          res.status(400).json({
            message: 'There is no store with this cnpj',
            error: true,
          });
        }
      })
      .catch((err) => res.status(400).json({ err, error: true }));
  });
};
