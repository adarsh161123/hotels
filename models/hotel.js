const mongoose = require("mongoose");

const hotelSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },

    location: {
      city: {
        type: String,
        required: true
      },
      state: {
        type: String,
        required: true
      },
      country: {
        type: String,
        default: "India"
      },
      address: {
        type: String,
        required: true
      }
    },

    pricePerNight: {
      type: Number,
      required: true
    },

    rating: {
      type: Number,
      default: 0,
      min: 0,
      max: 5
    },

    roomsAvailable: {
      type: Number,
      required: true
    },

    amenities: {
      type: [String],
      default: []
    },

    description: {
      type: String,
      required: true
    },

    contact: {
      phone: {
        type: String,
        required: true
      },
      email: {
        type: String,
        required: true
      }
    },

    images: {
      type: [String],
      default: []
    },

    isAvailable: {
      type: Boolean,
      default: true
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Hotel", hotelSchema);
