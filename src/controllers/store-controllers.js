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
      console.log(result);
      if (result.length > 0) {
        res.status(200).json({ result, error: false });
      } else {
        throw new Error('There are no stores in the system');
      }
    } catch (error) {
      res.status(404).json({ error: true, error: error });
    }
  });
  app.get('/store/:id', async (req, res) => {
    let id = req.params.id;
    try {
      let result = await Store.findAll({
        where: {
          id: id,
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
  app.put('/store/:id', async (req, res) => {
    let id = req.params.id;
    let body = req.body;

    try {
      let result = await Store.update(body, {
        where: { id: id },
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
  app.delete('/store/:id', async (req, res) => {
    let id = req.params.id;

    try {
      let result = await Store.destroy({
        where: { id: id },
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
