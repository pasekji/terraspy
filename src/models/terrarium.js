import { Schema, model, models } from "mongoose";

const TerrariumSchema = new Schema({
  id: {
    type: String,
    required: [true, "Id is required!"],
    maxlength: [50, "Id cannot exceed 50 characters."],
  },
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
  devices: [
    {
      type: DeviceSchema,
      ref: "Device",
    },
  ],
});

const Terrarium = models.Terrarium || model("Terrarium", TerrariumSchema);

export default Terrarium;