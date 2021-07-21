const Store = require('../models/store-model');

module.exports = (app) => {
  // Create
  app.post('/store', async (req, res) => {
    const { cnpj, address, email, phone, headcount } = req.body;
    await Store.create({
      cnpj: cnpj,
      address: address,
      email: email,
      phone: phone,
      headcount: headcount,
    })
      .then((result) => {
        res
          .status(201)
          .json({ result, message: 'Store successfully added', error: false });
      })
      .catch((err) => {
        res.status(400).json({ err, error: true });
      });
  });
  // Read
  app.get('/store', async (req, res) => {
    await Store.findAll()
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
      .catch((err) => res.status(404).json(err));
  });
  app.get('/store/:cnpj', async (req, res) => {
    let cnpj = req.params.cnpj;
    await Store.findAll({
      where: {
        cnpj: cnpj,
      },
    })
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

    await Store.update(body, {
      where: { cnpj: cnpj },
    })
      .then((result) => {
        if (result) {
          res.status(201).json({
            message: 'Store successfully updated',
            error: false,
          });
        } else {
          res.status(404).json({
            message: 'There is no store with this cnpj',
            error: true,
            result: result,
          });
        }
      })
      .catch((err) => {
        console.log(err);
        res.status(400).json({ err, error: true });
      });
  });

  //Delete
  app.delete('/store/:cnpj', async (req, res) => {
    let cnpj = req.params.cnpj;
    await Store.destroy({
      where: { cnpj: cnpj },
    })
      .then((result) => {
        if (result) {
          res.status(200).json({
            message: 'Store successfully deleted',
            error: false,
          });
        } else {
          res.status(404).json({
            message: 'There is no store with this cnpj',
            error: true,
          });
        }
      })
      .catch((err) => res.status(400).json({ err, error: true }));
  });
};
