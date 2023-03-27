const Joi = require("joi");

const id = Joi.string().uuid();

const name = Joi.string().min(5).max(15);

const price = Joi.number().positive();

// CRU-D (Delete doesnt need a schema)
// CREATE READ UPDATE

const createProductSchema = Joi.object({
    name: name.required(),
    price: price.required()
});

const updateProductSchema = Joi.object({
    name: name,
    price: price
});

const readProductSchema = Joi.object({
    id: id.required()
});

module.exports = { createProductSchema, readProductSchema, updateProductSchema };