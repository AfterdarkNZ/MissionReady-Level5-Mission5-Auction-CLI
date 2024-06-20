// Import necessary modules
import mongoose from "mongoose";

const AuctionItemSchema = new mongoose.Schema({
  title: { type: String, required: true, text: true }, // Specify text indexing here for title
  description: { type: String, required: true, text: true }, // Specify text indexing here for description
  start_price: { type: Number, required: true },
  reserve_price: { type: Number, required: true },
});

// Index for text search on 'title' and 'description' fields
AuctionItemSchema.index({ title: "text", description: "text" });

const AuctionItem = mongoose.model("AuctionItem", AuctionItemSchema);
export default AuctionItem;
