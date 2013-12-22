window.addEventListener('click', function(event) {

    if (event.target.id == '7'){
		  
	  console.log(event.target.id);
	  var x =document.getElementById("inputbox").value+"7";
	  document.getElementById("inputbox").value = x;
    }
    else if (event.target.id == '8'){
		  
	  console.log(event.target.id);
	  var x =document.getElementById("inputbox").value+"8";
	  document.getElementById("inputbox").value = x;
    }
    else if (event.target.id == '9'){
		  
	  console.log(event.target.id);
	  var x =document.getElementById("inputbox").value+"9";
	  document.getElementById("inputbox").value = x;
    }
    else if (event.target.id == '4'){
		  
	  console.log(event.target.id);
	  var x =document.getElementById("inputbox").value+"4";
	  document.getElementById("inputbox").value = x;
    }
    else if (event.target.id == '5'){
		  
	  console.log(event.target.id);
	  var x =document.getElementById("inputbox").value+"5";
	  document.getElementById("inputbox").value = x;
    }
    else if (event.target.id == '6'){
		  
	  console.log(event.target.id);
	  var x =document.getElementById("inputbox").value+"6";
	  document.getElementById("inputbox").value = x;
		  
    }
    else if (event.target.id == '1'){
		  
	  console.log(event.target.id);
	  var x =document.getElementById("inputbox").value+"1";
	  document.getElementById("inputbox").value = x;
		  
    }
    else if (event.target.id == '2'){
		  
	  console.log(event.target.id);
	  var x =document.getElementById("inputbox").value+"2";
	  document.getElementById("inputbox").value = x;
		  
    }
    else if (event.target.id == '3'){
		  
	  console.log(event.target.id);
	  var x =document.getElementById("inputbox").value+"3";
	  document.getElementById("inputbox").value = x;
		  
    }
    else if (event.target.id == '0'){
		  
	  console.log(event.target.id);
	  var x =document.getElementById("inputbox").value+"0";
	  document.getElementById("inputbox").value = x;
		  
    }
    else if (event.target.id == 'decimal'){
		  
	  console.log(event.target.id);
	  var x =document.getElementById("inputbox").value+".";
	  document.getElementById("inputbox").value = x;
		  
    }
    else if (event.target.id == '2power'){
		  
	  console.log(event.target.id);
	  var x =document.getElementById("inputbox").value+"^2";
	  document.getElementById("inputbox").value = x;
		  
    }
    else if (event.target.id == '('){
		  
	  console.log(event.target.id);
	  var x =document.getElementById("inputbox").value+"(";
	  document.getElementById("inputbox").value = x;
		  
    }
    else if (event.target.id == ')'){
		  
	  console.log(event.target.id);
	  var x =document.getElementById("inputbox").value+")";
	  document.getElementById("inputbox").value = x;
		  
    }
    else if (event.target.id == 'delete'){
		  
	  console.log(event.target.id);
	  var x =document.getElementById("inputbox").value.slice(0,-1);
	  document.getElementById("inputbox").value = x;
		  
    }
    else if (event.target.id == 'allclear'){
		  
	  console.log(event.target.id);
	  document.getElementById("inputbox").value = "";
		  
    }
    else if (event.target.id == 'multiply'){
		  
	  console.log(event.target.id);
	  var x =document.getElementById("inputbox").value+" * ";
	  document.getElementById("inputbox").value = x;
		  
    }
    else if (event.target.id == 'divide'){
		  
	  console.log(event.target.id);
	  var x =document.getElementById("inputbox").value+" / ";
	  document.getElementById("inputbox").value = x;
		  
    }
    else if (event.target.id == 'plus'){
		  
	  console.log(event.target.id);
	  var x =document.getElementById("inputbox").value+" + ";
	  document.getElementById("inputbox").value = x;
		  
    }
    else if (event.target.id == 'minus'){
		  
	  console.log(event.target.id);
	  var x =document.getElementById("inputbox").value+" - ";
	  document.getElementById("inputbox").value = x;
		  
    }
    else if (event.target.id == 'answer'){
		  
	  console.log(event.target.id);
		  
    }		
    else if (event.target.id == 'equals'){
		  
      FoxyCalc_Panel.equals();
		  
    }
}, false);

// functions available to Panel
var FoxyCalc_Panel = {
  equals: function() {
			
	var math = mathjs();
	document.getElementById("inputbox").value = math.eval(document.getElementById("inputbox").value);
  }
};
