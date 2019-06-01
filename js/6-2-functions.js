
/*
Program Table Definition

Input: getting child's answer from a sum operation that is presented

Processing: 
obtain two random numbers that are less than 100
present tha numbers to the users and asking the sum operation
obtaing the result from the user
compare the result to the real addition
prepare message with the results, depending on the child's answer

Output: show the result of the calculation
*/


function getRandomInt(max) {
	return Math.floor(Math.random() * Math.floor(max));
  }
  
function obtainNumbers(){
	let number1 = getRandomInt(100);
	let number2 = getRandomInt(100);

	//showing the numbers in the quiz 
	document.getElementById("number1").innerHTML = number1 ;
	document.getElementById("number2").innerHTML = number2 ;
}

function quiz(){
	let suma = document.getElementById("suma").value;

	let n1 = parseInt(document.getElementById("number1").innerHTML);
	let n2 = parseInt(document.getElementById("number2").innerHTML);

	//creacion de mensaje final 
let mensaje = "";
	if (n1+n2 == suma)
	{
		mensaje = "Correct! Good job.";
	}
	else
	{
		mensaje = "Sorry. That is incorrect.";
	}
		
	
	
	//showing the final result in the HTML
	document.getElementById("output").innerHTML = mensaje ;
}

//when the page is loaded, we obtaing the random numbers
obtainNumbers();