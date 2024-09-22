import mongoose from "mongoose";

export const personalizeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  navbar: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Navbar"
  },
  footer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Footer"
  },
  imageUrls: [{ type: String }],
});

const Personalize = mongoose.model("Personalize", personalizeSchema);
export default Personalize;
