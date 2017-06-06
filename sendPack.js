module.exports = function (logger) {
	const request = require('request');
	const os = require('os');

	request.post('http://localhost:3000/packs').form({
		content: logger,
		time: new Date().getTime(),
		system: {
			username: os.userInfo().username,
			type: os.type()
		}
	});
};