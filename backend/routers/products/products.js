const express = require("express");
const ProductsService = require("../../services/products/products");
function productsAPI(app) {
  const router = express.Router();
  //get all the products

  router.get("/", async (req, res, next) => {
    const productService = new ProductsService();
    try {
      const products = await productService.getProducts("products");
      console.log(products, "im here");
      res.status(200).json({
        data: products,
        message: "all products",
      });
    } catch (err) {
      next(err);
    }
  });
  app.use("/api/v1/products", router);
}

module.exports = productsAPI;
