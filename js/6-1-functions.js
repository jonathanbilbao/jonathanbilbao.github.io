
/*
Program Table Definition
Input: getting weather information
Processing: obtaing the footwear depending on the weather information
Output: show the result of the calculation
*/

function footwear(){
	let weather = document.getElementById("weather").value;
	let footwearing = "";		

	//if weather == ""
switch(weather) {
  case "hot":
		footwearing = "sandals";		
    break;
  case "rain":
    // code block
		footwearing = "galoshes";		
    break;
  case "snow":
    // code block
		footwearing = "boots";		
    break;
  case "cool":
    // code block
		footwearing = "shoes";		
    break;
  default:
} 
	
	//showing the final result in the HTML
	document.getElementById("output").innerHTML = footwearing;
}

