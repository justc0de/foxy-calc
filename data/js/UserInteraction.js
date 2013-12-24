window.addEventListener('click', function(event) {
		  
    if (event.target.id == '2power'){
		  
	  document.getElementById("inputbox").value += "^2";
		  
    } else if (event.target.id == '('){
		  
	  document.getElementById("inputbox").value += "(";
		  
    } else if (event.target.id == ')'){
		  
	  document.getElementById("inputbox").value += ")";
		  
    } else if (event.target.id == 'delete'){
		  
	  document.getElementById("inputbox").value = document.getElementById("inputbox").value.slice(0,-1);
		  
    } else if (event.target.id == 'allclear'){
		  
	  document.getElementById("inputbox").value = "";
	  FoxyCalc_Panel.setAnsValue("");
		  
    } else if (event.target.id == 'multiply'){
		  
	  document.getElementById("inputbox").value += "*";
		  
    } else if (event.target.id == 'divide'){
		  
	  document.getElementById("inputbox").value += "/";
		  
    } else if (event.target.id == 'plus'){
		  
	  document.getElementById("inputbox").value += "+";
		  
    } else if (event.target.id == 'minus'){
		  
	  document.getElementById("inputbox").value += "-";
		  
    } else if (event.target.id == 'answer'){
		  
	  document.getElementById("inputbox").value += FoxyCalc_Panel.getAnsValue();
		  
    } else if (event.target.id == 'equals'){
		  
      FoxyCalc_Panel.equals();
    }
    
    
    // Listen for submission on enter key
    document.getElementById('inputbox').onkeyup = function(event) {
      
      if (event.keyCode == 13) {
        FoxyCalc_Panel.equals();    
      }
    };
}, false);

// functions available to Panel
var FoxyCalc_Panel = {
		
  ansValue: "",
  
  append: function(value) {
	  document.getElementById("inputbox").value += value;
  },
  
  
  getAnsValue: function() {
	  
	// try .. catch, in case Ans is first button clicked
	try{
		
      // check if Ans has been set or cleared
	  if (ansValue === ""){
	  
	    FoxyCalc_Panel.setStatus("Ans is not set or has been cleared", 3500);
	    return "";
	
	  }else{
	
	    return ansValue;
	  }
	
	}catch(err){
		  
	  FoxyCalc_Panel.setStatus("Ans is not set or has been cleared", 3500);
	  return "";
	}
  },
  
  
  setAnsValue: function(value) {
	  ansValue = value;
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
  },

  
  setStatus: function(message,timeout) {
	
	statusbar = document.getElementById("status");
	statusbar.innerHTML = message;
	
	setTimeout(function(){
	  statusbar.innerHTML ="";
	},timeout);
  }
};

addon.port.on("shown", function() {
  document.getElementById("inputbox").click();
  document.getElementById("inputbox").focus();
});