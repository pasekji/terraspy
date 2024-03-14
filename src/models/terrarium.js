// models/terrarium.js

import { Schema, model, models } from "mongoose";

const TerrariumSchema = new Schema({
    name: {
        type: String,
        required: [true, "Name is required!"],
        maxlength: [50, "Name cannot exceed 50 characters."],
    },
    location: {
        type: String,
        maxlength: [255, "Location cannot exceed 255 characters."],
    },
    settings: {
        temperature: {
            min: Number,
            max: Number,
        },
        humidity: {
            min: Number,
            max: Number,
        },
        light: [{
            start: String,
            end: String,
        }],
    },
    devices: [{
        type: Schema.Types.ObjectId,
        ref: 'Device'
    }]
});

const Terrarium = models.Terrarium || model("Terrarium", TerrariumSchema);

export default Terrarium;
