var preference = require("sdk/simple-prefs"),
	Panel = require("Panel");

function onPrefChange(name) {
    
    Panel.get().port.emit('background-color', preference.prefs[name]);
};

exports.registerListener = function(){
	preference.on("background-color", onPrefChange);
};