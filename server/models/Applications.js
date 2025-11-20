const mongoose = require('mongoose');

const applicationSchema = new mongoose.Schema({
  learner: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  job: { type: mongoose.Schema.Types.ObjectId, ref: 'Job', required: true },
}, { timestamps: true });

module.exports = mongoose.model('Application', applicationSchema);
