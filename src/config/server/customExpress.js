const express = require('express')

module.exports = () => {
  const app = express();
  // middleware
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  
  return app;

}