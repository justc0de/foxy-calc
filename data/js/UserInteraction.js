window.addEventListener('click', function(event) {

    if (event.target.id.indexOf('7') == 0){
		  
	  console.log(event.target.id);
    }
    else if (event.target.id.indexOf('8') == 0){
		  
	  console.log(event.target.id);
		  
    }
    else if (event.target.id.indexOf('9') == 0){
		  
	  console.log(event.target.id);
		  
    }
    else if (event.target.id.indexOf('4') == 0){
		  
	  console.log(event.target.id);
		  
    }
    else if (event.target.id.indexOf('5') == 0){
		  
	  console.log(event.target.id);
		  
    }
    else if (event.target.id.indexOf('6') == 0){
		  
	  console.log(event.target.id);
		  
    }
    else if (event.target.id.indexOf('1') == 0){
		  
	  console.log(event.target.id);
		  
    }
    else if (event.target.id.indexOf('2') == 0){
		  
	  console.log(event.target.id);
		  
    }
    else if (event.target.id.indexOf('3') == 0){
		  
	  console.log(event.target.id);
		  
    }
    else if (event.target.id.indexOf('0') == 0){
		  
	  console.log(event.target.id);
		  
    }
    else if (event.target.id.indexOf('decimal') == 0){
		  
	  console.log(event.target.id);
		  
    }
    else if (event.target.id.indexOf('delete') == 0){
		  
	  console.log(event.target.id);
		  
    }
    else if (event.target.id.indexOf('allclear') == 0){
		  
	  console.log(event.target.id);
		  
    }
    else if (event.target.id.indexOf('multiply') == 0){
		  
	  console.log(event.target.id);
		  
    }
    else if (event.target.id.indexOf('divide') == 0){
		  
	  console.log(event.target.id);
		  
    }
    else if (event.target.id.indexOf('plus') == 0){
		  
	  console.log(event.target.id);
		  
    }
    else if (event.target.id.indexOf('minus') == 0){
		  
	  console.log(event.target.id);
		  
    }
    else if (event.target.id.indexOf('answer') == 0){
		  
	  console.log(event.target.id);
		  
    }		
    else if (event.target.id.indexOf('equals') == 0){
		  
      FoxyCalc_Panel.equals();
		  
    }
}, false);

// functions available to Panel
var FoxyCalc_Panel = {
  equals: function() {
			
	var math = mathjs();
			
	console.log('equals clicked');
	//console.log(math.eval('1.2 * (2 + 4.5)')); //Proof of concept, use of Math.js
  }
};
