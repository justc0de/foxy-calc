window.addEventListener('click', function(event) {
	
  if (event.target.id.indexOf('equals') == 0){
		
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