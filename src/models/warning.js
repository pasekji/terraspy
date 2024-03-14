import { Schema, model, models } from "mongoose";

const WarningSchema = new Schema({
  id: {
    type: String,
    required: [true, "Id is required!"],
    maxlength: [50, "Id cannot exceed 50 characters."],
  },
  type: {
    type: String,
    required: [true, "Type is required!"],
    enum: ["temperature", "humidity"],
  },
  message: {
    type: String,
    required: [true, "Message is required!"],
    maxlength: [255, "Message cannot exceed 255 characters."],
  },
  timestamp: {
    type: Date,
    required: [true, "Timestamp is required!"],
  },
  device: {
    type: DeviceSchema,
    ref: "Device",
  },
});

const Warning = models.Warning || model("Warning", WarningSchema);

export default Warning;