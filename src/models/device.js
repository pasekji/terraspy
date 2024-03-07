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
        maxlength: [1500000, "Image cannot exceed 1,5M characters when encoded."], // TODO test limitations for base64 encoded images
    },
    status: {
        type: String,
        enum: ["connected", "disconnected"],
        default: "connected",
    },
    settings: {
        temperature: {
            min: {
                type: Number,
                min: [-40, "Minimum temperature cannot be less than -40."],
                max: [80, "Minimum temperature cannot exceed 80."],
            },
            max: {
                type: Number,
                min: [-40, "Maximum temperature cannot be less than -40."],
                max: [80, "Maximum temperature cannot exceed 80."],
            },
        },
        humidity: {
            min: {
                type: Number,
                min: [0, "Minimum humidity cannot be less than 0."],
                max: [100, "Minimum humidity cannot exceed 100."],
            },
            max: {
                type: Number,
                min: [0, "Maximum humidity cannot be less than 0."],
                max: [100, "Maximum humidity cannot exceed 100."],
            },
        },
        light: [{
            start: {
                type: String,
                match: [
                    /^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/,
                    "Start light must be a valid 24-hour time format (HH:MM).",
                ],
            },
            end: {
                type: String,
                match: [
                    /^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/,
                    "End light must be a valid 24-hour time format (HH:MM).",
                ],
            }
        }],
    },
    measurements: [{
        temperature: {
            type: Number,
            min: [-40, "Temperature cannot be less than -40."],
            max: [80, "Temperature cannot exceed 80."],
        },
        humidity: {
            type: Number,
            min: [0, "Humidity cannot be less than 0."],
            max: [100, "Humidity cannot exceed 100."],
        },
        light: {
            type: Boolean,
        },
        timestamp: {
            type: Date, // UTC timestamp
        },
    
    }]
});

const Device = models.Device || model("Device", DeviceSchema);

export default Device;