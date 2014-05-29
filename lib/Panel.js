var PanelAPI = require("sdk/panel"),
	Data = require("./Data"),
	Widget = require("./Widget"),
	SimpleStorage = require("./SimpleStorage"),
	panel;

exports.init = function() {
	
	panel = PanelAPI.Panel({
		width: 300,
		height: 400,
		contentURL: Data.get("html/ui.html"),
        onShow: function() { 
        	
        	var prefs = JSON.stringify({
        		history: SimpleStorage.getHistory(),
        		currentHistoricalEntry: SimpleStorage.getCurrentHistoricalEntry()
            });
        	
        	this.port.emit('previousHistory', prefs);
        	this.port.emit('shown');
        }
	});
	
	
	panel.port.on("historyUpdate", function (history, currentHistoricalEntry) {
		SimpleStorage.setHistory(history);
		SimpleStorage.setCurrentHistoricalEntry(currentHistoricalEntry);
	});
};

exports.get = function() {
	return panel;
};

exports.show = function() {
	panel.show(Widget.get()); // Panel not anchoring to widget using show(), https://bugzilla.mozilla.org/show_bug.cgi?id=638142
};