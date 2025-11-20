const express = require('express');
const router = express.Router();
const Application = require('../models/Application');

// Apply to a job
router.post('/', async (req, res) => {
  try {
    const { learnerId, jobId } = req.body;
    const existing = await Application.findOne({ learner: learnerId, job: jobId });
    if (existing) return res.status(400).json({ error: 'Already applied for this job' });

    const application = new Application({ learner: learnerId, job: jobId });
    await application.save();
    res.json(application);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get all applications for a learner
router.get('/:learnerId', async (req, res) => {
  try {
    const applications = await Application.find({ learner: req.params.learnerId }).populate('job');
    res.json(applications);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
