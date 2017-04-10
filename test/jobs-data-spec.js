const expect = require("chai").expect;
const mongoose = require("mongoose");
const Jobs = require(`${process.cwd()}/models/jobs`);
const jobModelUtils = require(`${process.cwd()}/utils/jobsUtils.js`);
const Promise = require("bluebird");

function resetJobs() {
  return new Promise(function(resolve, reject) {
    mongoose.connection.collections['jobs'].drop(resolve, reject);
  });
}

const connectDb = Promise.promisify(mongoose.connect, mongoose);

describe('get jobs', function() {
  let jobs;

  before(function(done) {
    mongoose.connect('mongodb://localhost/jobify')
      .then(resetJobs())
      .then(function() { return jobModelUtils.seedJobs() })
      .then(jobModelUtils.findJobs)
      .then(function(collection) {
          jobs = collection;
          done()
      });
  });

  it('should never be empty since jobs are seeded', function() {
    expect(jobs.length).to.be.at.least(1);
  });

  it('should should have a job with a title', function() {
    expect(jobs[0].title).to.not.be.empty;
  });

  it('should should have a desctiption with a title', function() {
    expect(jobs[0].description).to.not.be.empty;
  });
});
