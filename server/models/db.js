const mongoose = require("mongoose");

const mongoURI = 'mongodb://localhost:27017/login_register'; 

async function connectDB() {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true, 
    });
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1); 
  }
}

connectDB();

module.exports = mongoose;

