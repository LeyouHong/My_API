module.exports = (app) => {
  app.use('/picture-api', require('./picture'));
};
