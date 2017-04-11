'use strict';

const mongoose = require("mongoose");
const express = require("express")
const jobListingsRouter = express.Router();

const Jobs = require(`${process.cwd()}/models/jobs`)

jobListingsRouter.get('/jobs', (req, res) => {
  Jobs.find({}, (err, jobs) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.send(jobs);
  })
});

module.exports = jobListingsRouter;
