const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const jobsSchema = new Schema({
  title: String,
  description: {type: String, default: "This job has no description"},
  createdAt: {type: Date, default: Date.now}
});

module.exports = mongoose.model("Jobs", jobsSchema);