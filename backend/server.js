const express = require("express");
const redis = require("redis");

const app = express();

const { config } = require("./config/index");

client = redis.createClient(config.portRedis);

const productsAPI = require("./routers/products");
const ordersAPI = require("./routers/orders");
const usersAPI = require("./routers/users");

//body parser
app.use(express.json());

//Routes
ordersAPI(app);
productsAPI(app, client);
usersAPI(app);

app.listen(config.port, (err) => {
  if (err) {
    console.log("there is an error on loading the server");
  }
  console.log(`listening on the port ${config.port}`);
});
