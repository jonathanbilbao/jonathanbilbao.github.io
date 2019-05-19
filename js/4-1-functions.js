
/*
Program Table Definition
Input: getting address parts
Processing: concatening all the address parts in one

Output: show the result of the concatenation
*/

function address(){
	let city = document.getElementById("city").value;
	let state = document.getElementById("state").value;
	let zip = document.getElementById("zip").value;
	
	let addressFinal =city + ", " +state+" "+zip;
	document.getElementById("output").innerHTML = addressFinal;
}

