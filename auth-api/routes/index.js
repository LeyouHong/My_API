module.exports = (app) => {
  app.get('/', (req, res) => {
    res.json({ message: 'please login!'});
  });

  app.use('/auth-api', require('./users'));
};
