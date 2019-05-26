
/*
Program Table Definition
Input: getting cylinder information
Processing: calculate the volume 

Output: show the result of the calculation
*/

function volume(){
	let radius = parseFloat(document.getElementById("radius").value);
	let height = parseFloat(document.getElementById("height").value);
	
	//calculation
	let volume = parseFloat(Math.PI * radius*radius * height);
	

	//showing the final result in the HTML
	document.getElementById("output").innerHTML = volume;
}

