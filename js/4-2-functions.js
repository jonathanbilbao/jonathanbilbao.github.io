
/*
Program Table Definition
Input: getting name
Processing: adding the name to the scripture
Output: show the result of the concatenation
*/

function scripture(){
	let name = document.getElementById("name").value;
	
	let scripture1 = "I, ";
	let scripture2 = ", having been born of goodly parents, therefore I was taught somewhat in all the learning of my father; and having seen many afflictions in the course of my days, nevertheless, having been highly favored of the Lord in all my days; yea, having had a great knowledge of the goodness and the mysteries of God, therefore I make a record of my proceedings in my days.";
	let scriptFinal =scripture1 +name+scripture2;
	
	
	
	
	document.getElementById("output").innerHTML = scriptFinal;
}

