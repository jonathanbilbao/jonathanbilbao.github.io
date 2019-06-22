
/*
Program Table Definition

Input: get integer number

Processing: 
validate that the number is between 1 and 10
starting on 1, repeat the process to get the multiplication between the number provided by the user and 1, 2, 3, 4 to 10


Output: show the result of the calculation
*/

function calculate()
{
	let print = "";
	let mensaje = "";
	
	let number = parseInt(document.getElementById("number").value);
	
	if(number >= 1 && number <= 10)
	{
		for (i = 1; i <= 12; i++) 
		{
			print= print + number + " X " + i + " = " + i*number + "<br>";
		}
		
	}else
	{
		alert("number incorrect. It should be between 1 and 10");
	}	
	
	mensaje = print;
	
	//showing the final result in the HTML
	document.getElementById("output").innerHTML = mensaje ;
}
