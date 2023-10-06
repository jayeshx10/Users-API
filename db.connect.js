const mongoose = require('mongoose');
const mySecret = process.env['MONGO_DB']

const intializeDatabase = async () => {
  try {
    const connection = await mongoose.connect( mySecret, {
      useNewUrlParser: true, useUnifiedTopology: true
    })

    if (connection) {
      console.log("Connected successfully.")
    }
  }
  catch (error) {
    console.log(error);
  }
}

module.exports = intializeDatabase;