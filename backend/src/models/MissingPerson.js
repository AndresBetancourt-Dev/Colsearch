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
    neighborhood: String,
    contact: String,
    email: String,
    location: {
      latitude: String,
      longitude: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("MissingPerson", missingPersonSchema);
