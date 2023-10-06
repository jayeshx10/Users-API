const mongoose = require('mongoose');

// schema
const userSchema = new mongoose.Schema({
  email: String,
  password: String,
  profilePicture: String,
  username: String,
  phoneNumber: Number,
  address: String
})

// making a collection
const User = mongoose.model('User', userSchema);
// exporting it to make documents
module.exports = User;