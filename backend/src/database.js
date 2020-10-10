const mongoose = require("mongoose");
const URI = process.env.MONGODB_URI;

async function database() {
  try {
    mongoose.connect(URI, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    });
    console.log("Database connected");
  } catch (error) {
    console.log(error.message);
  }
}

database();
