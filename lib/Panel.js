var PanelAPI = require("sdk/panel"),
	Data = require("./Data"),
	panel;

exports.init = function() {
	
	panel = PanelAPI.Panel({
		width: 315,
		height: 400,
		contentURL: Data.get("html/ui.html"),
        onShow: function() { this.port.emit('shown'); }
	
	});
	
	panel.port.emit('background-color');
	//panel.port.emit('tab_listener');
};

exports.get = function() {
	return panel;
};

