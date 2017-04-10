const mongoose = require("mongoose");
const Promise = require("bluebird");
const Jobs = require(`${process.cwd()}/models/jobs`);


const findJobs = function (query) {
  return Promise.cast(Jobs.find(query).exec());
}

const seedJobs = () => {
  const seedData = [
    { title: "Marketer", description: "You shall be responsible for getting clients interested in our product" },
    { title: "Security guy", description: "You shall be laden with the responsibility of keeping us all safe" },
    { title: "Account officer", description: "You shall be responsible for lots of money and calculations" },
    { title: "Programmer", description: "You will be required to constantly churn out code" },
    { title: "Teacher", description: "You will be impart knowledge all day long." },
    { title: "Driver", description: "You will be required to move people around all over town." },
  ]
  return new Promise(function (resolve, reject) {
    findJobs().then(collection => {
      if (!collection.length) {
        Jobs
          .insertMany(seedData)
          .then(jobs => {
            console.log('*************************');
            console.log('* Seed plant successful *');
            console.log('*************************');
            resolve(jobs);
          })
          .catch(err => {
            console.log('Seeding failed, ', err);
            reject(err);
          })
      }
    });
  });
};

const connectDb = Promise.promisify(mongoose.connect, {context: mongoose});

exports.findJobs = findJobs;
exports.seedJobs = seedJobs;
exports.connectDb = connectDb;
