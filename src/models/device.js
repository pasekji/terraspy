// models/device.js

import { Schema, model, models } from "mongoose";

const DeviceSchema = new Schema({
    name: {
        type: String,
        required: [true, "Name is required!"],
        maxlength: [50, "Name cannot exceed 50 characters."],
    },
    location: {
        type: String,
        maxlength: [255, "Location cannot exceed 255 characters."],
    },
    image: {
        type: String,
        maxlength: [1500000, "Image cannot exceed 1.5M characters when encoded."],
    },
    status: {
        type: String,
        enum: ["connected", "disconnected"],
        default: "connected",
    },
    terrariums: [{
        type: Schema.Types.ObjectId,
        ref: 'Terrarium'
    }]
});

const Device = models.Device || model("Device", DeviceSchema);

export default Device;
