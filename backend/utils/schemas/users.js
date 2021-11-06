const joi = require("@hapi/joi");

const userIdSchema = joi.string().regex(/^[0-9a-fA-F]{24}$/);
const userNameSchema = joi.string().max(50);
const userPasswordschema = joi.string().max(256);

const createUserSchema = {
  username: userNameSchema.required(),
  password: userPasswordschema.required(),
};

module.exports = {
  createUserSchema,
};
