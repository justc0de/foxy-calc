var widgetAPI = require("sdk/widget"),
	Data = require("./Data"),
	Panel = require("./Panel"),
	widget;

exports.init = function() {
	
	widget = widgetAPI.Widget({
		id: "foxy-calc-widget",
		label: "Foxy calc",
		contentURL: Data.get("images/icon.png"),
		panel: Panel.get()
	});
};

exports.get = function() {
	return widget;
};