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
          .json({
            result,
            message: 'Store successfully added pls',
            error: false,
          });
      } else {
        throw new Error('Error adding store');
      }
    } catch (error) {
      res.status(400).json({ result: error.message, error: true });
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
      res.status(404).json({ result: error.message, error: true });
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
      const resError = {
        error: {
          result: error.message,
          error: true,
        },
      };
      res.status(404).json(resError);
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

      if (result.includes(1) == true) {
        res.status(201).json({
          message: 'Store successfully updated',
          error: false,
        });
      } else {
        throw new Error('Data invalid! Try again.');
      }
    } catch (error) {
      res.status(400).json({ result: error.message, error: true });
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
        throw new Error('Error deleting store, store not found');
      }
    } catch (error) {
      res.status(404).json({ result: error.message, error: true });
    }
  });
};
