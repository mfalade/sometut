const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const jobsSchema = new Schema({
  title: String,
  description: {type: String, default: "This job has no description"},
  createdAt: {type: Date, default: Date.now}
});

const Jobs = mongoose.model("Jobs", jobsSchema);

exports.Jobs = Jobs;
exports.seedJobs = () => {
    const seedData = [
      {title: "Marketer", description: "You shall be responsible for getting clients interested in our product"},
      {title: "Security guy", description: "You shall be laden with the responsibility of keeping us all safe"},
      {title: "Account officer", description: "You shall be responsible for lots of money and calculations"},
      {title: "Programmer", description: "You will be required to constantly churn out code"},
      {title: "Teacher", description: "You will be impart knowledge all day long."},
      {title: "Driver", description: "You will be required to move people around all over town."},
    ]
    Jobs.find({}).exec((err, collection) => {
      if(!collection.length) {
        Jobs
          .insertMany(seedData)
          .then(documents => {
            console.log('*************************');
            console.log('* Seed plant successful *');
            console.log('*************************');
          })
          .catch(err => {
            console.log('Seeding failed, ', err);
          })
      }
    })
};
