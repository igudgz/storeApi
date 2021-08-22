const express = require('express');
const cors = require('cors');

module.exports = () => {
  const app = express();
  // middleware
  app.use(cors());
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());

  return app;
};
