import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
  id: {
    type: String,
    required: [true, "Id is required!"],
    maxlength: [50, "Id cannot exceed 50 characters."],
  },
  email: {
    type: String,
    unique: [true, "User with this email already exists!"],
    required: [true, "Email is required!"],
    maxlength: [255, "Email cannot exceed 255 characters."],
  },
  username: {
    type: String,
    required: [true, "Username is required!"],
    maxlength: [50, "Username cannot exceed 50 characters."],
  },
  image: {
    type: String,
    maxlength: [255, "Image URL cannot exceed 255 characters."],
  },
  settings: {
    temperatureUnit: {
      type: String,
      enum: ["celsius", "fahrenheit"],
      default: "celsius",
    },
    timeFormat: {
      type: String,
      enum: ["24-hour", "12-hour"],
      default: "24-hour",
    },
  },
  favouriteDevices: [
    {
      type: DeviceSchema,
      ref: "Device",
    },
  ],
  devices: [
    {
      type: DeviceSchema,
      ref: "Device",
    },
  ],
});

const User = models.User || model("User", UserSchema);

export default User;