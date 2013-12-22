var widget = require("sdk/widget"),
	Data = require("./Data"),
	Panel = require("./Panel");

exports.init = function() {
	
  widget.Widget({
	id: "foxy-calc-widget",
	label: "Foxy calc",
	contentURL: Data.get("images/ico.png"),
	panel: Panel.get()
  });
};