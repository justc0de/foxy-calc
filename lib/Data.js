var dataAPI = require("sdk/self").data;

exports.get = function(content) {
	
	return dataAPI.url(content);
}