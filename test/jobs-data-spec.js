const expect = require("chai").expect;
const mongoose = require("mongoose");
const Jobs = require(`${process.cwd()}/models/jobs`);
const jobModelUtils = require(`${process.cwd()}/utils/jobsUtils.js`);
const Promise = require("bluebird");

function resetJobs() {
  return new Promise((resolve, reject) => {
    mongoose.connection.collections['jobs'].drop(resolve, reject);
  });
}

describe('get jobs', () => {
  let jobs;

  before(done => {
    jobModelUtils.connectDb('mongodb://localhost/jobify')
      .then(resetJobs())
      .then(() => { return jobModelUtils.seedJobs() })
      .then(jobModelUtils.findJobs)
      .then(collection => {
          jobs = collection;
          done()
      });
  });

  it('should never be empty since jobs are seeded', () => {
    expect(jobs.length).to.be.at.least(1);
  });

  it('should should have a job with a title', () => {
    expect(jobs[0].title).to.not.be.empty;
  });

  it('should should have a desctiption with a title', () => {
    expect(jobs[0].description).to.not.be.empty;
  });
});
