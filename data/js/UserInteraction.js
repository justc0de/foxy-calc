function setSCTH(){

	document.getElementById("sinh").className = "sciButton";
	document.getElementById("cosh").className = "sciButton";
	document.getElementById("tanh").className = "sciButton";

	document.getElementById("sin").className = "hidden";
	document.getElementById("cos").className = "hidden";
	document.getElementById("tan").className = "hidden";
	
	document.getElementById("asin").className = "hidden";
	document.getElementById("acos").className = "hidden";
	document.getElementById("atan").className = "hidden";

	document.getElementById("asinh").className = "hidden";
	document.getElementById("acosh").className = "hidden";
	document.getElementById("atanh").className = "hidden";
};

function setSCT(){
      
	document.getElementById("sinh").className = "hidden";
	document.getElementById("cosh").className = "hidden";
	document.getElementById("tanh").className = "hidden";

	document.getElementById("sin").className = "sciButton";
	document.getElementById("cos").className = "sciButton";
	document.getElementById("tan").className = "scibutton";
	
	document.getElementById("asin").className = "hidden";
	document.getElementById("acos").className = "hidden";
	document.getElementById("atan").className = "hidden";

	document.getElementById("asinh").className = "hidden";
	document.getElementById("acosh").className = "hidden";
	document.getElementById("atanh").className = "hidden";
};

function setASCTH(){
    
	document.getElementById("sinh").className = "hidden";
	document.getElementById("cosh").className = "hidden";
	document.getElementById("tanh").className = "hidden";

	document.getElementById("sin").className = "hidden";
	document.getElementById("cos").className = "hidden";
	document.getElementById("tan").className = "hidden";
	
	document.getElementById("asin").className = "hidden";
	document.getElementById("acos").className = "hidden";
	document.getElementById("atan").className = "hidden";

	document.getElementById("asinh").className = "sciButton";
	document.getElementById("acosh").className = "sciButton";
	document.getElementById("atanh").className = "sciButton";
};

function setASCT(){
	document.getElementById("sinh").className = "hidden";
	document.getElementById("cosh").className = "hidden";
	document.getElementById("tanh").className = "hidden";

	document.getElementById("sin").className = "hidden";
	document.getElementById("cos").className = "hidden";
	document.getElementById("tan").className = "hidden";
	
	document.getElementById("asin").className = "sciButton";
	document.getElementById("acos").className = "sciButton";
	document.getElementById("atan").className = "sciButton";

	document.getElementById("asinh").className = "hidden";
	document.getElementById("acosh").className = "hidden";
	document.getElementById("atanh").className = "hidden";
};

function setShiftElementsTrue(){

	document.getElementById("log").className = "hidden";
	document.getElementById("10powerx").className = "sciButton";
	document.getElementById("ln").className = "hidden";
	document.getElementById("exp").className = "sciButton";
	document.getElementById("x!").className = "hidden";
	document.getElementById("round").className = "sciButton";
	document.getElementById("2power").className = "hidden";
	document.getElementById("squareroot").className = "sciButton";
	document.getElementById("3power").className = "hidden";
	document.getElementById("cuberoot").className = "sciButton";

};

function setShiftElementsFalse(){

	document.getElementById("log").className = "sciButton";
	document.getElementById("10powerx").className = "hidden";
	document.getElementById("ln").className = "sciButton";
	document.getElementById("exp").className = "hidden";
	document.getElementById("x!").className = "sciButton";
	document.getElementById("round").className = "hidden";
	document.getElementById("2power").className = "sciButton";
	document.getElementById("squareroot").className = "hidden";
	document.getElementById("3power").className = "sciButton";
	document.getElementById("cuberoot").className = "hidden";

};

// functions available to Panel
var FoxyCalc_Panel = {
		
  ansValue: "",
  timerid: null,
  hyperbolic: false,
  shift_state:false,
  history: [],
  currentHistoricalEntry: 0,

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
  
  submitListener: function() {
	  
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

	setSCTH();	
	this.hyperbolic = true;
    }
    else if (this.hyperbolic == true && this.shift_state == false ){
      
	setSCT();
	this.hyperbolic = false;
    }
    else if (this.hyperbolic == true && this.shift_state == true){
    
	setASCT();
	this.hyperbolic = false;
    }
    else if (this.hyperbolic == false && this.shift_state == true){
	setASCTH();
	this.hyperbolic = true;
    }
    
  },

  shift: function() {
    
    if (this.hyperbolic == false && this.shift_state == false){

	setASCT();	
	setShiftElementsTrue();
	this.shift_state = true;
    }
    else if (this.hyperbolic == true && this.shift_state == false ){
	setASCTH();
	setShiftElementsTrue();
	this.shift_state = true;
    }
    else if (this.hyperbolic == true && this.shift_state == true){
	setSCTH();
	setShiftElementsFalse();
	this.shift_state = false ;
    }
    else if (this.hyperbolic == false && this.shift_state == true){
	setSCT();
	setShiftElementsFalse();
	this.shift_state = false;
    }
  
  },

  equals: function() {
	  
	// store expression in history  
	  	if (FoxyCalc_Panel.history.length > 99){
	  		
	  		FoxyCalc_Panel.history.shift();
	  		FoxyCalc_Panel.history.push(document.getElementById("inputbox").value);
	  		
	  	}else{
	  		
	  		FoxyCalc_Panel.history.push(document.getElementById("inputbox").value);
	  		FoxyCalc_Panel.currentHistoricalEntry = FoxyCalc_Panel.history.length;
	  	}
	  	
	  	
	  	// evaluate expression
	  	if (document.getElementById("inputbox").value == ""){
	
		  	FoxyCalc_Panel.setStatus("You must enter an equation",3500);
	  
  		}else{
	
  			try {
	
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
