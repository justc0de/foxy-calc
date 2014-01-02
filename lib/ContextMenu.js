var ContextMenuAPI = require("sdk/context-menu"),
	Data = require("./Data"),
	Panel = require("./Panel");

exports.init = function() {
	
	ContextMenuAPI.Item({
		
		label: 'Copy/Paste expression to Foxy-calc',
		context: ContextMenuAPI.SelectionContext(),
		contentScriptFile: Data.get("js/SelectedText.js"),
	    onMessage: function (selectedText) {
	    	
	    	Panel.get().port.emit('selectedText', selectedText);
	    	Panel.show();
	    }
	});
};