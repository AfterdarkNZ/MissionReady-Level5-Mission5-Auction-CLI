import { program } from "commander";
import seedDatabase from "./commands/seed.js";
import deleteAuctionItems from "./commands/delete.js";
//import deleteOne from "./commands/deleteOne.js";

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
  .action(deleteAuctionItems);

// Command: delete one item based on index number
// program
//   .command("deleteOne <index>")
//   .description("Delete one auction item based on index number")
//   .action((index) => {
//     const parsedIndex = parseInt(index, 10);
//     if (isNaN(parsedIndex)) {
//       console.error("Index must be a valid number");
//       process.exit(1);
//     }
//     deleteOne(parsedIndex); // Correctly pass parsedIndex to deleteOne function
//   });

// Parsing CLI arguments
program.parse(process.argv);
