{
	require('dotenv').config();
	const express = require('express');
	const app = express();
	const morgan = require('morgan');
	const mongoose = require('mongoose');
	const jobListingsRouter = require('./routes/');
	const jobModel = require('./models/jobs');

	app.set('view engine', 'pug');
	app.set('views','./views');

	app.use(morgan('combined'));
	app.use(express.static(__dirname + '/public'));
	app.use('/api', jobListingsRouter);

	app.get('*', (req, res) => {
		res.render('index');
	});

	mongoose.connect('mongodb://mayor:jobify@ds149800.mlab.com:49800/jobify');
	const connection = mongoose.connection;
	connection.once('open', () => {
		console.log('connected to mongo db..');
		jobModel.seedJobs();
	});

	app.listen(process.env.PORT, () => {
		console.log('app started on port: ', process.env.PORT);
	});
}
