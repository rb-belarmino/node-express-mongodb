import { ObjectId } from "mongodb";
import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
  id: {
    type: ObjectId,
  },

  title: {
    type: String,
    required: true,
  },

  publish_company: {
    type: String,
  },
});
