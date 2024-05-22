import mongoose from "mongoose";
import "dotenv/config";

async function databaseConnect() {
  mongoose.connect(process.env.DB_BOOKSTORE);

  return mongoose.connection;
}

export default databaseConnect;
