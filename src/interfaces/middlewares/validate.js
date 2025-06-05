module.exports = (schema, type = 'body') => {
  return (req, res, next) => {
    const { error } = schema.validate(req[type]);
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }
    next();
  };
};
