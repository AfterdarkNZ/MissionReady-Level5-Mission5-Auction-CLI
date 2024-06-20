// Import necessary modules
import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/auctionDB", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    // Ensure indexes for text search
    // await mongoose.connection.createIndex({
    //   title: "text",
    //   description: "text",
    // });

    console.log("MongoDB database is connected!");
  } catch (err) {
    console.log(err.message);
    process.exit(1);
  }
};

export default connectDB;
