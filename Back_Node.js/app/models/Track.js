const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const TrackSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    album: {
      type: Schema.Types.ObjectId,
      ref: "Album",
      required: true,
    },
    duration: {
      type: String,
      required: true,
    },
    number: {
      type: Number,
      required: true,
    },
  },
  { versionKey: false }
);

const Track = mongoose.model("Track", TrackSchema);
module.exports = Track;
