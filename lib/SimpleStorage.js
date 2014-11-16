var ss = require("sdk/simple-storage");

function getHistory(){
	return ss.storage.history;
}

exports.getHistory = function(){
	return getHistory();
}

function setHistory(history){
	ss.storage.history = history;
}

exports.setHistory = function(history){
	setHistory(history);
}


function setCurrentHistoricalEntry(currentHistoricalEntry){
	ss.storage.currentHistoricalEntry = currentHistoricalEntry;
}

exports.setCurrentHistoricalEntry = function(currentHistoricalEntry){
	setCurrentHistoricalEntry(currentHistoricalEntry);
}

function getCurrentHistoricalEntry(){
	return ss.storage.currentHistoricalEntry;	
}

exports.getCurrentHistoricalEntry = function(){
	return getCurrentHistoricalEntry();
}