import * as Joi from 'joi';

export const createClientSchema = Joi.object({
  firstName: Joi.string().min(3).max(30).required(),
  middleName: Joi.string(),
  lastName: Joi.string().min(3).max(30).required(),
  mobilePhone: Joi.string(),
  homePhone: Joi.string(),
  emailAddress: Joi.string().email(),
  birthDate: Joi.string(),
  gender: Joi.boolean().truthy('MALE').falsy('FEMALE').sensitive().required(),
  notes: Joi.string(),
  preferredLanguage: Joi.string(),

  addresses: Joi.array(),
  idDocuments: Joi.array(),

  _personalizados: Joi.object({
    External_ID: Joi.string(),
  }),
});
