require('dotenv').config();
const mongoose = require('mongoose');

const DB_PORT = process.env.PORT;
const DB_SECRET = process.env.SECRET;
const DB_USER = process.env.DBUSER;
const DB_PASS = process.env.DBPASS;
const DB_CLUSTER = process.env.DB_CLUSTER;
const DB_COLLECTIONS = process.env.DB_COLLECTIONS;
const encodeURIComponent = '%40smu%40smu%40';


mongoose.connect(process.env.MONGODB_URI || `mongodb+srv://dbUser:${encodeURIComponent}@cluster0.odgmd.mongodb.net/stack-autocomplete?retryWrites=true&w=majority`, {
// mongoose.connect(process.env.MONGODB_URI || `mongodb+srv://${DB_USER}:${DB_PASS}@${DB_CLUSTER}.odgmd.mongodb.net/${DB_COLLECTIONS}?retryWrites=true&w=majority`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

module.exports = mongoose.connection;
