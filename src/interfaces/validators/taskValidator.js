const Joi =  require("joi");


const taskSchema = Joi.object({
    title: Joi.string().min(3).required(),
    description: Joi.string().min(3).required(),
    status: Joi.string().valid('completada', 'pendiente').required()
});


const updateTaskStatusSchema = Joi.object({
    status: Joi.string().valid('completada', 'pendiente').required()
});

const idParamSchema = Joi.object({
    id: Joi.string().required()
});



module.exports = { 
    taskSchema,
    updateTaskStatusSchema,
    idParamSchema
 };