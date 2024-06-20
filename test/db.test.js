import mongoose from "mongoose";
import { expect } from "chai";
import connectDB from "../config/db.js";

describe("Database Connection", () => {
  before(async () => {
    try {
      await connectDB();
    } catch (error) {
      console.error("Error connecting to the database", error);
      throw error; //rethrow to ensure the test fails if there is an error
    }
  });

  after(async () => {
    try {
      await mongoose.connection.close();
    } catch (error) {
      console.error("Error closing the database connection", error);
    }
  });

  it("should connect to MongoDB", () => {
    expect(mongoose.connection.readyState).to.equal(1);
  });
});
