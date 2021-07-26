const Store = require('../models/store-model');

module.exports = (app) => {
  // Create
  app.post('/store', async (req, res) => {
    const { cnpj, address, email, phone, headcount } = req.body;
    try {
      let result = await Store.create({
        cnpj: cnpj,
        address: address,
        email: email,
        phone: phone,
        headcount: headcount,
      });
      console.log(result, 'oi');
      if (result.dataValues) {
        res
          .status(201)
          .json({ result, message: 'Store successfully added', error: false });
      } else {
        throw new Error('Error adding store');
      }
    } catch (error) {
      res.status(400).json({ error: true, error: error });
    }
  });
  // Read
  app.get('/store', async (req, res) => {
    try {
      let result = await Store.findAll();
      if (result.length > 0) {
        res.status(200).json({ result, error: false });
      } else {
        throw new Error('There are no stores in the system');
      }
    } catch (error) {
      res.status(404).json({ error: true, error: error });
    }
  });
  app.get('/store/:cnpj', async (req, res) => {
    let cnpj = req.params.cnpj;
    try {
      let result = await Store.findAll({
        where: {
          cnpj: cnpj,
        },
      });
      if (result.length > 0) {
        res.status(200).json({ result, error: false });
      } else {
        throw new Error('There is no store with this cnpj');
      }
    } catch (error) {
      res.status(404).json({ error: true, error: error });
    }
  });

  //Update
  app.put('/store/:cnpj', async (req, res) => {
    let cnpj = req.params.cnpj;
    let body = req.body;

    try {
      let result = await Store.update(body, {
        where: { cnpj: cnpj },
      });
      if (result) {
        res.status(201).json({
          message: 'Store successfully updated',
          error: false,
        });
      } else {
        throw new Error({
          error: 'There is no store with this cnpj',
          result: result,
        });
      }
    } catch (error) {
      res.status(404).json({ error: true, error: error });
    }
  });

  //Delete
  app.delete('/store/:cnpj', async (req, res) => {
    let cnpj = req.params.cnpj;

    try {
      let result = await Store.destroy({
        where: { cnpj: cnpj },
      });

      if (result) {
        res.status(200).json({
          message: 'Store successfully deleted',
          error: false,
        });
      } else {
        throw new Error({
          error: 'There is no store with this cnpj',
          result: result,
        });
      }
    } catch (error) {
      res.status(404).json({ error: true, error: error });
    }
  });
};
