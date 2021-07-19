// import lib
const customExpress = require('./customExpress');
const app = customExpress();
const port = process.env.PORT || 3000;

// import routes
const routes = require('../../controllers/store-controllers');
routes(app);

module.exports = app.listen(port, () => {
  console.log(`Server started in http://localhost:${port} :)`);
});
