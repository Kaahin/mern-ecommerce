// Validation
import Joi from "@hapi/joi";

// Register Validation
export const registerValidation = (data) => {
  const schema = Joi.object({
    // sammarbetar med User model
    first: Joi.string().required(),
    last: Joi.string().required(),
    email: Joi.string().required().email(),
    password: Joi.string().required(),
  });

  return schema.validate(data);
};

// Login Validation
export const loginValidation = (data) => {
  const schema = Joi.object({
    email: Joi.string().required().email(),
    password: Joi.string().required(),
  });

  return schema.validate(data);
};

// module.exports = {
//   registerValidation,
//   loginValidation,
// };
