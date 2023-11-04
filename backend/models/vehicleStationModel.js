// models/vehicleStationModel.js

import mongoose from "mongoose";

const vehicleStationSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
});

const VehicleStation = mongoose.model("VehicleStation", vehicleStationSchema);

export default VehicleStation;
