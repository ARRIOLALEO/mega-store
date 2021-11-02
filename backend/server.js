const express = require("express");

const app = express();

const { config } = require("./config/index");

const productsAPI = require("./routers/products/products");

//body parser
app.use(express.json());

//Routes
productsAPI(app);

app.listen(config.port, (err) => {
  if (err) {
    console.log("there is an error on loading the server");
  }
  console.log(`listening on the port ${config.port}`);
});
