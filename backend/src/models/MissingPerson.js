const { Schema, model } = require("mongoose");

const missingPersonSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    surname: {
      type: String,
      required: true,
      trim: true,
    },
    identificationCard: {
      type: String,
    },
    approved: Boolean,
    found: Boolean,
    description: {
      age: Number,
      height: Number,
      skin: String,
      hairColour: String,
      complexion: String,
      detailed: String,
    },
    imageUrl: String,
    contact: String,
    email: String,
    location: {
      city: String,
      country: String,
      neighborhood: String,
      latitude: Number,
      longitude: Number,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("MissingPerson", missingPersonSchema);
