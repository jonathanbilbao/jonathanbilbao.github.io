
/*
Program Table Definition
Input: getting date information

Processing: 
ask a number to the user
count how many times the user tries to guess the number
finish the program when the user guess the number

Output: show the result of the calculation

*/

function numberGuessGame() 
{
	let contador = 0;

	let answer = 38;
	let message = "Input a number";
	
	let guess = 0;
	
	do
	{
		guess = parseInt(prompt(message));
	
		if (guess < answer) 
		{
			message = guess +
				" is too low. Please enter another integer.";
		}
		if (guess > answer) 
		{
			message = guess +
				" is too high. Please enter another integer.";
		}

	 if (guess == answer) 
		{
			message = guess + " is correct!";
		}
		//aumenta contador
		contador = contador + 1;
	}	
	while(guess != answer);
	//showing the final result in the HTML
	document.getElementById("output").innerHTML = message ;
	
	document.getElementById("output1").innerHTML = contador ;

	
}
