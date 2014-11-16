var PanelAPI = require("sdk/panel"),
	Data = require("./Data"),
	SimpleStorage = require("./SimpleStorage"),
	panel;

exports.init = function() {
	
	panel = PanelAPI.Panel({
		width: 315,
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
	
	panel.port.emit('background-color');
	//panel.port.emit('tab_listener');
	
	panel.port.on("historyUpdate", function (history, currentHistoricalEntry) {
		SimpleStorage.setHistory(history);
		SimpleStorage.setCurrentHistoricalEntry(currentHistoricalEntry);
	});
};

exports.get = function() {
	return panel;
};

