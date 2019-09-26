const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DataSchema = new Schema(
  {
    id: Number,
    name: String,
    email: String,
    age: Number,
    country: String,
    city: String
  },
  { timestamps: true }
);

module.exports = mongoose.model("Data", DataSchema);
