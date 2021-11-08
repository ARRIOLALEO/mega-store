const express = require("express");
const ProductsService = require("../services/products");
const { createProductSchema } = require("../utils/schemas/products");

const validationHandler = require("../utils/middleware/validationHandler");

function productsAPI(app) {
  const router = express.Router();
  //get all the products
  const productService = new ProductsService();
  router.get("/", async (req, res, next) => {
    try {
      const products = await productService.getProducts();
      res.status(200).json({
        data: products,
        message: "all products",
      });
    } catch (err) {
      next(err);
    }
  });

  router.get("/:productId", async (req, res, next) => {
    const { productId } = req.params;
    try {
      const product = await productService.getProduct(productId);
      res.status(200).json({
        data: product,
        message: "product retrived",
      });
    } catch (err) {
      next(err);
    }
  });

  router.put("/", validationHandler(createProductSchema), async (req, res, next) => {
    const { body: data } = req;
    try {
      const createProductId = await productService.createProduct(data);
      res.status(200).json({
        data: createProductId,
        message: "product added",
      });
    } catch (err) {
      next(err);
    }
  });

  router.patch("/:productId", async (req, res, next) => {
    const { productId } = req.params;
    const { body: data } = req;
    try {
      const updateProductId = productService.updateProduct(productId, data);
      res.status(200).json({
        data: updateProductId,
        message: "product has been added",
      });
    } catch (err) {
      next(err);
    }
  });

  router.delete("/:productId", async (req, res, next) => {
    const { productId } = req.params;
    const deleteProductId = await productService.deleteProduct(productId);
    try {
      res.status(200).json({
        data: deleteProductId,
        mesage: "product deleted",
      });
    } catch (err) {
      next(err);
    }
  });
  app.use("/api/v1/products", router);
}

module.exports = productsAPI;
