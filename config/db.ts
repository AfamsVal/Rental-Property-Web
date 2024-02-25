import mongoose from "mongoose";

let connected = false;

const connectDB = async (): Promise<void> => {
  mongoose.set("strictQuery", true);

  // If the database is already connected, don't connect again
  if (connected) {
    console.log("Database is already connected");
    return;
  }

  try {
    // Connect to MongoDB

    await mongoose.connect(process.env.MONGODB_URI as string);
    connected = true;
    console.log("Connected to the database");
  } catch (error) {
    console.error(
      "Error connecting to the database:",
      (error as Error).message
    );
    connected = false;
  }
};

export default connectDB;
