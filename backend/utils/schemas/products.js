const joi = require("@hapi/joi");

const productIdSchema = joi.string().regex(/^[0-9a-fA-F]{24}$/);
const productTitle = joi.string().max(80);
const productCategory = joi.string().max(50);
const productSubCategory = joi.array();
const productDescription = joi.string();
const productPrice = joi.number().required();
const productImage = joi.string().uri();
const productGalery = joi.array();
const produtRating = joi.number();

const createProductSchema = {
  tile: productTitle.required(),
  category: productCategory.required(),
  subcategory: productSubCategory,
  description: productDescription,
  price: productPrice.required(),
  productImage: productImage,
  productGalery: productGalery,
  productRating: produtRating,
};

module.exports = {
  createProductSchema,
};
