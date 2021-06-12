const mongoose = require('mongoose');

const connectionString = 'mongodb://mongo:27017/?readPreference=primary&appname=mongodb-vscode%200.5.0&ssl=false';


mongoose.connect(connectionString, { useNewUrlParser: true }).catch((e) => {
  console.error('Connection error', e.message);
});

const db = mongoose.connection;

module.exports = db;

