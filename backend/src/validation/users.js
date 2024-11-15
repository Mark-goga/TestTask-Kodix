import Joi from 'joi';

export const userSignupSchema = Joi.object({
  firstName: Joi.string().required().min(3).max(20).messages({
    'string.base': 'First Name should be a type of string',
    'string.min': 'First Name should have a minimum length of 3',
    'string.max': 'First Name should have a maximum length of 20',
    'any.required': "First Name is required field"
  }),
  lastName: Joi.string().required().min(3).max(20).messages({
    'string.base': 'Last Name should be a type of string',
    'string.min': 'Last Name should have a minimum length of 3',
    'string.max': 'Last Name should have a maximum length of 20',
    'any.required': "Last Name is required field"
  }),
  email: Joi.string().email().email().min(3).messages({
    'string.base': 'email should be a type of string',
    'string.empty': 'email cannot be empty',
    'string.email': 'Email must be a valid email address',
    'string.min': 'email should have a minimum length of 3',
    'string.max': 'email should have a maximum length of 20',
  }),
  password: Joi.string().required().min(3).max(20).messages({
    'string.base': 'password should be a type of string',
    'string.empty': 'password cannot be empty',
    'string.min': 'password should have a minimum length of 3',
    'string.max': 'password should have a maximum length of 20',
    'any.required': 'password is a required field',
  })
});

export const userSigninSchema = Joi.object({
  email: Joi.string().required().email().min(3).max(50).messages({
    'string.base': 'email should be a type of string',
    'string.empty': 'email cannot be empty',
    'string.email': 'Email must be a valid email address',
    'string.min': 'email should have a minimum length of 3',
    'string.max': 'email should have a maximum length of 50',
  }),
  password: Joi.string().required().min(3).max(50).messages({
    'string.base': 'password should be a type of string',
    'string.empty': 'password cannot be empty',
    'string.min': 'password should have a minimum length of 3',
    'string.max': 'password should have a maximum length of 50',
    'any.required': 'password is a required field',
  })
});
export const refreshTokenSchema = Joi.object({
  refreshToken: Joi.string().required().messages({
    'string.base': 'Refresh Token should be a type of string',
    'string.empty': 'Refresh Token cannot be empty',
    'any.required': 'Refresh Token is required field',
  })
})
