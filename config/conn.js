const mongoose = require("mongoose");

const connDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("DB Connected");
  } catch (error) {
    console.log(error);
  }
};

module.exports = connDB;
