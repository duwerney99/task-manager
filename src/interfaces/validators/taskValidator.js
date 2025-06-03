const Joi =  require("joi");


const taskSchema = Joi.object({
    title: Joi.string().min(3).required(),
    description: Joi.string().min(3).required(),
    status: Joi.string().valid('completada', 'pendiente').required()
});



module.exports = { taskSchema };