const express = require("express");

const app = express();

const { config } = require("./config/index");

const productsAPI = require("./routers/products");
const ordersAPI = require("./routers/orders");
const usersAPI = require("./routers/users")

//body parser
app.use(express.json());

//Routes
ordersAPI(app);
productsAPI(app);
usersAPI(app)


app.listen(config.port, (err) => {
  if (err) {
    console.log("there is an error on loading the server");
  }
  console.log(`listening on the port ${config.port}`);
});
