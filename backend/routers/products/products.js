const express = require("express");
const ProductsService = require("../../services/products/products");
function productsAPI(app) {
  const router = express.Router();
  //get all the products
  const productService = new ProductsService();
  router.get("/", async (req, res, next) => {
    const { category } = req.query;
    try {
      const products = await productService.getProducts(category);
      res.status(200).json({
        data: products,
        message: "all products",
      });
    } catch (err) {
      next(err);
    }
  });

  router.get("/:category/:productId", async (req, res, next) => {
    const { category, productId } = req.params;
    try {
      const product = await productService.getProduct(category, productId);
      res.status(200).json({
        data: product,
        message: "product retrived",
      });
    } catch (err) {
      next(err);
    }
  });
  app.use("/api/v1/products", router);
}

module.exports = productsAPI;
