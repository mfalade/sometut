'use strict';

{
	require('dotenv').config();
	
	global.__BASE = __dirname;
	const express = require('express');
	const app = express();
	const morgan = require('morgan');
	const bodyParser = require('body-parser');
	const jobListingsRouter = require(`${__BASE}/routes`);
	const jobModelUtils = require(`${process.cwd()}/utils/jobsUtils`);
	const APP_ENV = process.env.NODE_ENV || 'development';
	const config = require(`${__BASE}/config/${APP_ENV}`);

	app.set('view engine', 'pug');
	app.set('views','./views');

	app.use(morgan('combined'));
	app.use(bodyParser.json())
	app.use(bodyParser.urlencoded({ extended: false }))
	app.use(bodyParser.text({ type: 'text/html' }))
	app.use(express.static(__dirname + '/public'));
	app.use('/api', jobListingsRouter);

	app.get('*', (req, res) => {
		res.render('index');
	});

	jobModelUtils
		.connectDb(config.db.connection)
		.then(() => {
			console.log(`connected to db using configuration for env: ${APP_ENV}`);
			jobModelUtils.seedJobs();
		});

	app.listen(config.port, () => {
		console.log('app started on port: ', config.port);
	});
}
