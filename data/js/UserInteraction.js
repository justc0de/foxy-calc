// functions available to Panel
var FoxyCalc_Panel = {
		
  ansValue: "",
  
  submitListener: function() {
	document.getElementById('inputbox').onkeyup = function(event) {

	  if (event.keyCode == 13) {
	    FoxyCalc_Panel.equals();    
	    document.getElementById("inputbox").focus();
	  }
    };
  },
  
  
  del: function() {
	  document.getElementById("inputbox").value = document.getElementById("inputbox").value.slice(0,-1);
	  document.getElementById("inputbox").focus();
  },
  
  
  ac: function() {
	  document.getElementById("inputbox").value = "";
	  document.getElementById("inputbox").focus();
  },
  
  
  append: function(value) {
	  document.getElementById("inputbox").value += value;
	  document.getElementById("inputbox").focus();
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
	statusbar.appendChild( document.createTextNode(message) );
	
	setTimeout(function(){
	  while( statusbar.firstChild ) {
	      statusbar.removeChild( statusbar.firstChild );
	  }
	},timeout);
  }
};

addon.port.on("shown", function() {
  document.getElementById("inputbox").focus();
});
