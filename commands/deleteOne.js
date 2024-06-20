// Import necessary modules
import connectDB from "../config/db.js";
import AuctionItem from "../models/AuctionItem.js";
import { program } from "commander";

const deleteOneItem = async (index) => {
  await connectDB();
  try {
    const items = await AuctionItem.find().sort({ _id: 1 }).exec();
    if (index < 0 || index >= items.length) {
      console.log(
        `Index out of range. Please provide a valid index between 0 and ${
          items.length - 1
        }.`
      );
      process.exit(1);
    }

    const itemToDelete = items[index];
    await AuctionItem.deleteOne({ _id: itemToDelete._id });
    console.log(
      `Item with index ${index} (title: "${itemToDelete.title}") deleted successfully`
    );
  } catch (err) {
    console.error(err);
  } finally {
    process.exit();
  }
};

program
  .requiredOption("-i, --index <index>", "Index of the item to delete")
  .parse(process.argv);

const options = program.opts();
const index = parseInt(options.index, 10);
if (isNaN(index)) {
  console.error("Index must be a valid number");
  process.exit(1);
}

deleteOneItem(index);
