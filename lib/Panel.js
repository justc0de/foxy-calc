var PanelAPI = require("sdk/panel"),
	Data = require("./Data"),
	Widget = require("./Widget"),
	panel;

exports.init = function() {
	
	panel = PanelAPI.Panel({
		width: 300,
		height: 350,
		contentURL: Data.get("html/ui.html"),
        onShow: function() { 
        	this.port.emit('shown');
        }
	});
	
	panel.port.emit('background-color');
};

exports.get = function() {
	return panel;
};

exports.show = function() {
	panel.show(Widget.get()); // Panel not anchoring to widget using show(), https://bugzilla.mozilla.org/show_bug.cgi?id=638142
};