import mongoose from "mongoose";
import autoIncrement from "mongodb-autoincrement";

const Schema = mongoose.Schema;

const entityschema = new Schema(
  {
    channel: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    translations: {
      type: String,
      required: true,
    },
    type:{
      ocr:{
        type: String,
      },
      speech:{
        type: String,
      },
    },
    createdat: {
      type: Date,
      required: true,
      default: Date.now,
    },
  },
  {
    collection: "entity",
  }
);

export default entityschema;
