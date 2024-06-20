// Import necessary modules
import connectDB from "../config/db.js";
import AuctionItem from "../models/AuctionItem.js";

const deleteDatabase = async () => {
  await connectDB();
  try {
    await AuctionItem.deleteMany({});
    console.log("Data deleted successfully");
  } catch (err) {
    console.error(err);
  } finally {
    process.exit();
  }
};
deleteDatabase();
