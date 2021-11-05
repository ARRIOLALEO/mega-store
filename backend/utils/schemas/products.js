const joi = require("@hapi/joi");

const productIdSchema = joi.string().regex(/^[0-9a-fA-F]{24}$/);
const productTitle = joi.string().max(80);
const productCategory = joi.string().max(50);
const productPrice = joi.number().required();
const productImage = joi.string().uri();
const createProductSchema = {
  tile: productTitle.required(),
  category: productCategory.required(),
  price: productPrice.required(),
  productImage: productImage,
};

module.exports = {
  createProductSchema,
};
