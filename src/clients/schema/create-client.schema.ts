import * as Joi from 'joi';

export const createClientSchema = Joi.object({
  firstName: Joi.string().min(3).max(30).required(),
  lastName: Joi.string().min(3).max(30).required(),
  gender: Joi.boolean().truthy('MALE').falsy('FEMALE').sensitive().required(),
});
