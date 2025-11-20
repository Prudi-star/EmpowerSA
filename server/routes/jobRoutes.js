import express from "express";
import { protect, authorizeRoles } from "../middleware/authMiddleware.js";
import mongoose from "mongoose";
import User from "../models/User.js";

const router = express.Router();

let jobs = [
  { id: 1, title: "Frontend Developer", description: "React.js experience needed" },
    { id: 2, title: "Backend Developer", description: "Node.js experience required" },
      { id: 3, title: "UI/UX Designer", description: "Figma & Adobe XD skills" },
        { id: 4, title: "Digital Marketing Intern", description: "Social media & SEO knowledge" },
        ];

        // Get all jobs
        router.get("/", protect, (req, res) => res.json(jobs));

        // Apply for a job
        router.post("/apply/:jobId", protect, async (req, res) => {
          try {
              const user = await User.findById(req.user.id);
                  const jobId = parseInt(req.params.jobId);

                      if (user.appliedJobs.includes(jobId)) {
                            return res.status(400).json({ error: "Already applied" });
                                }

                                    user.appliedJobs.push(jobId);
                                        await user.save();

                                            res.json({ message: "Applied successfully", appliedJobs: user.appliedJobs });
                                              } catch (err) {
                                                  res.status(500).json({ error: err.message });
                                                    }
                                                    });

                                                    export default router;