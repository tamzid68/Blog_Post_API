const Joi = require("joi");

const postSchema = Joi.object({
    title: Joi.string().min(3).required(),
    content: Joi.string().min(10).required(),
    author: Joi.string().required()
});

module.exports = postSchema;