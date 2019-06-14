
/*
Program Table Definition

Input: get integer number

Processing: 
starting on 1, validate if the numbers are odd and then sum themselves each other

Output: show the result of the calculation
*/

function calculate(){
	let sum = 0;
	let mensaje = "";
	
	let number = parseInt(document.getElementById("number").value);
	
	for (i = 1; i <= number; i++) 
	{
  	//if odd 
		if(i % 2 != 0)
		{
			sum = sum + i;
		}
	}
	
	mensaje = "the sum of odd numbers from 1 to " + number + " is  = " + sum;
	
	//showing the final result in the HTML
	document.getElementById("output").innerHTML = mensaje ;
}
