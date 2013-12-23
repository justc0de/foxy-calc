var Panel = require("sdk/panel"),
	Data = require("./Data"),
	panel;

exports.init = function() {
	
	panel = Panel.Panel({
		width: 300,
		height: 250,
		contentURL: Data.get("html/ui.html"),
        onShow: function() { 
        	this.port.emit('shown');
        }
	});
};

exports.get = function() {
	return panel;
}
