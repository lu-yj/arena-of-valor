module.exports = app => {
  const mongoose = require('mongoose');
  mongoose.connect('mongodb://localhost:27017/arena-of-valor', {
    useNewUrlParser: true
  });

  // require('require-all')(__dirname + '/../models')
}