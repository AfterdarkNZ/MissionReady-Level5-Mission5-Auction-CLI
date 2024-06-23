import mongoose from "mongoose";
import { program } from "commander";
import seedDatabase from "./commands/seed.js";
import deleteDatabase from "./commands/delete.js";
import deleteOne from "./commands/deleteOne.js";

// Connect to MongoDB
mongoose
  .connect("mongodb://localhost:27017/auction", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err.message);
    process.exit(1);
  });

// CLI commands setup
program.version("1.0.0").description("CLI for auction management");

// Command: seed
program
  .command("seed")
  .description("Seed auction items into the database")
  .action(seedDatabase);

// Command: delete
program
  .command("delete")
  .description("Delete all auction items from the database")
  .action(deleteDatabase);

// Command: delete one item based on index number
program
  .command("deleteOne <index>")
  .description("Delete one auction item based on index number")
  .action((index) => {
    const parsedIndex = parseInt(index, 10);
    if (isNaN(parsedIndex)) {
      console.error("Index must be a valid number");
      process.exit(1);
    }
    deleteOne(parsedIndex);
  });

program.parse(process.argv);
