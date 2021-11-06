const joi = require("@hapi/joi");

const userIdSchema = joi.string().regex(/^[0-9a-fA-F]{24}$/);
const userNameSchema = joi.string().max(50);
const userEmailSchema = joi.string().email();
const userPasswordschema = joi.string().max(256);

const createUserSchema = {
  username: userNameSchema.required(),
  password: userPasswordschema.required(),
  email: userEmailSchema.required(),
};

const getUserSchema = {
  _id: userIdSchema.required(),
};

const updateUserSchema = {
  _id: userIdSchema.required(),
  apikeyToken: joi.string.required(),
};
module.exports = {
  createUserSchema,
  getUserSchema,
  updateUserSchema,
};
