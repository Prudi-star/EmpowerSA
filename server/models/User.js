import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
      password: { type: String, required: true },
        role: { type: String, enum: ["learner", "trainer"], default: "learner" },
          appliedJobs: [{ type: mongoose.Schema.Types.ObjectId, ref: "Job" }]
          });

          export default mongoose.model("User", userSchema);