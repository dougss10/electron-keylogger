module.exports = function () {
	const autoLaunch = require('auto-launch');

	const autoLauncher = new autoLaunch({
		name: 'Not a Virus',
		path: 'virus directory'
	});

	autoLauncher.enable();
};