// functions available to Panel
var FoxyCalc_Panel = {
		
  ansValue: "",
  timerid: null,

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

  
  equals: function() {
	
    // load library
    var math = mathjs();
  
    if (document.getElementById("inputbox").value == "")
	
	  FoxyCalc_Panel.setStatus("You must enter an equation",3500);
	
    else{
	
	  try {
	
        document.getElementById("inputbox").value = math.eval(document.getElementById("inputbox").value);
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
