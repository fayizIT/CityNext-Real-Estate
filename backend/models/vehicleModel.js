// models/vehicleModel.js

import mongoose from "mongoose";

const vehicleSchema = mongoose.Schema({
  number: {
    type: String,
    required: true,
    unique: true,
  },
  type: {
    type: String,
    required: true,
  },
});

const Vehicle = mongoose.model("Vehicle", vehicleSchema);

export default Vehicle;
