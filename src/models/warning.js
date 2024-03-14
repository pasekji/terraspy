// models/warning.js

import { Schema, model, models } from "mongoose";

const WarningSchema = new Schema({
    terrarium: {
        type: Schema.Types.ObjectId,
        ref: 'Terrarium',
        required: true,
    },
    type: {
        type: String,
        enum: ["temperature", "humidity"],
        required: true,
    },
    value: {
        type: Number,
        required: true,
    },
    timestamp: {
        type: Date,
        default: Date.now,
    }
});

const Warning = models.Warning || model("Warning", WarningSchema);

export default Warning;
