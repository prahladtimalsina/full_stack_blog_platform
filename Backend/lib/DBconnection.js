import mongoose from "mongoose";

const DBconnection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
        console.log("Connected MongoDB:", mongoose.connection.name);

  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

export default DBconnection;