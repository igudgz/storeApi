// import lib
const customExpress = require('./customExpress');
const app = customExpress();
const port = 3000;

//import db
const database = require('../database/database');

// import routes
const routes = require('../../controllers/client-controllers');
routes(app);

app.listen(port, () => {
  console.log(`Server started in http://localhost:${port} :)`);
});
