function setElements(properties){
	
	for (var property in properties){
		document.getElementById(property).className = properties[property];
	}
};

function changeTab(selected_tab,tabs){

    for (var i =0; i< tabs.length;i++){
	if (tabs[i].children[0].id == selected_tab.id){
      
	var selected = document.getElementById(selected_tab.id+"_content");
	selected.style.display ="block";
	selected_tab.className = "selected";

	}else{
	  var non_selected = document.getElementById(tabs[i].children[0].id+"_content");
	  non_selected.style.display = "none";
	  tabs[i].children[0].className = "nonselected";
	}    
    }
} 


// functions available to Panel
var FoxyCalc_Panel = {
		
  ansValue: "",
  timerid: null,
  hyperbolic: false,
  shift_state:false,
  history: [],
  currentHistoricalEntry: 0,
  
  restoreHistory: function(value){
	  var parsedValues = JSON.parse(value);
		
	  if (typeof parsedValues.history  === 'undefined' || typeof parsedValues.currentHistoricalEntry === 'undefined'){
		  parsedValues.history = [];
		  FoxyCalc_Panel.currentHistoricalEntry = 0;
	  
	  }else{
	  
		  FoxyCalc_Panel.history = parsedValues.history;
		  FoxyCalc_Panel.currentHistoricalEntry = parsedValues.currentHistoricalEntry;
	  }
  },

  setCaretPosition: function(elemId, caretPos) {
	  
	  var elem = document.getElementById(elemId);

	  if(elem != null) {
	    
		  if(elem.createTextRange) {
		
			  elem.createTextRange().move('character', caretPos);
			  elem.createTextRange().select();
		
		  } else {
		            
			  if(elem.selectionStart) {
		  
				  elem.focus();
				  elem.setSelectionRange(caretPos, caretPos);
		  
			  } else {
		                
				  elem.focus();
			  }
		  }
	  }
  },
  
  keyListener: function() {
	  
	  document.getElementById('inputbox').onkeyup = function(event) {

		  if (event.keyCode == 13) {
		  
			  FoxyCalc_Panel.equals();    
			  document.getElementById("inputbox").focus();
	  
		  }else if (event.keyCode == 38) { // up, earlier statement
			  
			  if ((FoxyCalc_Panel.currentHistoricalEntry - 1) >= 0){

				  document.getElementById("inputbox").value = FoxyCalc_Panel.history[--FoxyCalc_Panel.currentHistoricalEntry];
			  }
		  
		  }else if (event.keyCode == 40) { // down, newer statement
			  
			  if ((FoxyCalc_Panel.currentHistoricalEntry + 1) <= 99 && (FoxyCalc_Panel.currentHistoricalEntry + 1) < FoxyCalc_Panel.history.length){
				  
				  document.getElementById("inputbox").value = FoxyCalc_Panel.history[++FoxyCalc_Panel.currentHistoricalEntry];
			  }
		  }
	  };
  },
  
  
  del: function() {
	  
	  var startPos = 0;
		
		// insert text at caret position
		if (document.getElementById("inputbox").selectionStart || document.getElementById("inputbox").selectionStart == '0') {
	        startPos = document.getElementById("inputbox").selectionStart;
	        var endPos = document.getElementById("inputbox").selectionEnd;
	        document.getElementById("inputbox").value = document.getElementById("inputbox").value.substring(0, startPos).slice(0, -1)
	            + document.getElementById("inputbox").value.substring(endPos, document.getElementById("inputbox").value.length);
	    } else {
	    	document.getElementById("inputbox").value += value;
	    }

		this.setCaretPosition('inputbox', startPos - 1);
  },



  caretInBrackets: function(funcName) {
	  
	  var startPos = 0;
	  this.insert(funcName);
		
		// insert text at caret position
		if (document.getElementById("inputbox").selectionStart || document.getElementById("inputbox").selectionStart == '0')
		  startPos = document.getElementById("inputbox").selectionStart;
	        var endPos = document.getElementById("inputbox").selectionEnd;
	    
		this.setCaretPosition('inputbox', endPos - 1);
  },
  
  
  ac: function() {
	  document.getElementById("inputbox").value = "";
	  document.getElementById("inputbox").focus();
  },
  
  
  insert: function(value) {	  
	  
	  var startPos = 0;
	
	  // insert text at caret position
	  if (document.getElementById("inputbox").selectionStart || document.getElementById("inputbox").selectionStart == '0') {
		  startPos = document.getElementById("inputbox").selectionStart;
		  var endPos = document.getElementById("inputbox").selectionEnd;
		  document.getElementById("inputbox").value = document.getElementById("inputbox").value.substring(0, startPos)
          	+ value
            + document.getElementById("inputbox").value.substring(endPos, document.getElementById("inputbox").value.length);
	  } else {
		  document.getElementById("inputbox").value += value;
	  }
	    
	  // # of spaces to move caret
	  if (value === parseInt(value)){
		
		  this.setCaretPosition('inputbox', startPos + 1);
	
	  } else{
		
		  this.setCaretPosition('inputbox', startPos + value.length);	
	  }
  },
  
  
  getAnsValue: function() {
	  
	// try .. catch, in case Ans is first button clicked
	try{
		
      // check if Ans has been set or cleared
	  if (this.ansValue === ""){
	  
	    FoxyCalc_Panel.setStatus("Ans is not set or has been cleared", 3500);
	    document.getElementById("inputbox").value += "";
	
	  }else{
	
		  document.getElementById("inputbox").value += this.ansValue;
	  }
	
	}catch(err){
		  
	  FoxyCalc_Panel.setStatus("Ans is not set or has been cleared", 3500);
	  document.getElementById("inputbox").value += "";
	}
	
	document.getElementById("inputbox").focus();
  },
  
  
  setAnsValue: function(value) {
	  this.ansValue = value;
  },

  hyp: function() {
    
    //check if hyp has been pressed already
    if (this.hyperbolic == false && this.shift_state == false){

    	setElements({
    		sinh: 'sciButton', cosh:'sciButton', tanh:'sciButton', sin:'hidden', cos:'hidden', tan:'hidden', 
    		asin:'hidden', acos:'hidden', atan:'hidden', asinh:'hidden', acosh:'hidden', atanh:'hidden'});	
	
    	this.hyperbolic = true;
    
    } else if (this.hyperbolic == true && this.shift_state == false ){
     
    	setElements({
    		sinh: 'hidden', cosh:'hidden', tanh:'hidden', sin:'sciButton', cos:'sciButton', tan:'sciButton', 
    		asin:'hidden', acos:'hidden', atan:'hidden', asinh:'hidden', acosh:'hidden', atanh:'hidden'});
    	
    	this.hyperbolic = false;
    
    } else if (this.hyperbolic == true && this.shift_state == true){
    
    	setElements({
    		sinh: 'hidden', cosh:'hidden', tanh:'hidden', sin:'hidden', cos:'hidden', tan:'hidden', 
    		asin:'sciButton', acos:'sciButton', atan:'sciButton', asinh:'hidden', acosh:'hidden', atanh:'hidden'});
    	
    	this.hyperbolic = false;
    
    } else if (this.hyperbolic == false && this.shift_state == true){
	
    	setElements({
    		sinh: 'hidden', cosh:'hidden', tanh:'hidden', sin:'hidden', cos:'hidden', tan:'hidden', 
    		asin:'hidden', acos:'hidden', atan:'hidden', asinh:'sciButton', acosh:'sciButton', atanh:'sciButton'});
    	
    	this.hyperbolic = true;
    }
  },

  shift: function() {
    
    if (this.hyperbolic == false && this.shift_state == false){

    	setElements({
    		sinh: 'hidden', cosh:'hidden', tanh:'hidden', sin:'hidden', cos:'hidden', tan:'hidden', 
    		asin:'sciButton', acos:'sciButton', atan:'sciButton', asinh:'hidden', acosh:'hidden', atanh:'hidden',
    		log: 'hidden', tenpowerx:'sciButton', ln:'hidden', exp:'sciButton', factorial:'hidden', 
    		round:'sciButton', twopower:'hidden', squareroot:'sciButton', threepower:'hidden', cuberoot:'sciButton'});
    	
    	this.shift_state = true;
    
    } else if (this.hyperbolic == true && this.shift_state == false ){
	
    	setElements({
    		sinh: 'hidden', cosh:'hidden', tanh:'hidden', sin:'hidden', cos:'hidden', tan:'hidden', 
    		asin:'hidden', acos:'hidden', atan:'hidden', asinh:'sciButton', acosh:'sciButton', atanh:'sciButton',
    		log: 'hidden', tenpowerx:'sciButton', ln:'hidden', exp:'sciButton', factorial:'hidden', 
    		round:'sciButton', twopower:'hidden', squareroot:'sciButton', threepower:'hidden', cuberoot:'sciButton'});
    	
    	this.shift_state = true;
    
    } else if (this.hyperbolic == true && this.shift_state == true){
	
    	setElements({
    		sinh: 'sciButton', cosh:'sciButton', tanh:'sciButton', sin:'hidden', cos:'hidden', tan:'hidden', 
    		asin:'hidden', acos:'hidden', atan:'hidden', asinh:'hidden', acosh:'hidden', atanh:'hidden',
    		log: 'sciButton', tenpowerx:'hidden', ln:'sciButton', exp:'hidden', factorial:'sciButton', 
    		round:'hidden', twopower:'sciButton', squareroot:'hidden', threepower:'sciButton', cuberoot:'hidden'});
    	
    	this.shift_state = false ;
    
    } else if (this.hyperbolic == false && this.shift_state == true){
	
    	setElements({
    		sinh: 'hidden', cosh:'hidden', tanh:'hidden', sin:'sciButton', cos:'sciButton', tan:'sciButton', 
    		asin:'hidden', acos:'hidden', atan:'hidden', asinh:'hidden', acosh:'hidden', atanh:'hidden',
    		log: 'sciButton', tenpowerx:'hidden', ln:'sciButton', exp:'hidden', factorial:'sciButton', 
    		round:'hidden', twopower:'sciButton', squareroot:'hidden', threepower:'sciButton', cuberoot:'hidden'});
    	
    	this.shift_state = false;
    }
  },

  equals: function() {	  	
	  	
	  	if (document.getElementById("inputbox").value == ""){
	
		  	FoxyCalc_Panel.setStatus("You must enter an equation",3500);
	  
  		}else{
	
  			try {
        		
  				// remove older duplicates from history
        		for (var i = 0; i < FoxyCalc_Panel.history.length; i++){
        			
        			if (FoxyCalc_Panel.history[i] == document.getElementById("inputbox").value){
        				
        				FoxyCalc_Panel.history.splice([i], 1);
        				i--;
        			}
        		}
        		
        		// store expression in history
        	  	if (FoxyCalc_Panel.history.length > 99){
        	  		
        	  		FoxyCalc_Panel.history.shift();
        	  		FoxyCalc_Panel.history.push(document.getElementById("inputbox").value);
        	  		
        	  	}else{
        	  		
        	  		FoxyCalc_Panel.history.push(document.getElementById("inputbox").value);
        	  		FoxyCalc_Panel.currentHistoricalEntry = FoxyCalc_Panel.history.length;
        	  	}
        	  	
        	  	// update history in simple-storage
        	  	addon.port.emit("historyUpdate", FoxyCalc_Panel.history, FoxyCalc_Panel.currentHistoricalEntry);
        	  	
        	  	// evaluate expression
        	  	document.getElementById("inputbox").value = mathjs().eval(document.getElementById("inputbox").value);
        		FoxyCalc_Panel.setAnsValue(document.getElementById("inputbox").value);
	  
	  		} catch(err) {
	  			
		  		FoxyCalc_Panel.setStatus(err,3500);
	  		}
  		}
    
  		document.getElementById("inputbox").focus();
	},

  
    setStatus: function(message,timeout) {
	
    	statusbar = document.getElementById("status");
	
    	while( statusbar.firstChild ) {
    		statusbar.removeChild( statusbar.firstChild );
    	}
	
    	if (this.timerid != null)
    		clearTimeout(this.timerid);
	
    	statusbar.appendChild( document.createTextNode(message) );
	
    	this.timerid = setTimeout(function(){
	  
    		while( statusbar.firstChild ) {
    			statusbar.removeChild( statusbar.firstChild );
    		}
    	},timeout);
    }
};

addon.port.on("shown", function() {
	document.getElementById("inputbox").focus();
});

addon.port.on("background-color", function(value) {
	document.body.style.background = value;
});

addon.port.on("selectedText", function(text) {
	FoxyCalc_Panel.insert(text);
	document.getElementById("inputbox").focus();
});


addon.port.once('tab_listener',function(){
    //get all the tabs
    var tabs = document.getElementById("tabs").children;
  
    //add on click listener to each
    for (var i =0; i< tabs.length;i++){
	tabs[i].onclick = function(x,y) { return function() {changeTab(x,y); }; }(tabs[i].children[0],tabs); 
    }

});

addon.port.on("previousHistory", function(value) {
	FoxyCalc_Panel.restoreHistory(value);
});

