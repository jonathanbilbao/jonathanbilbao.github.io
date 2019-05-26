
/*
Program Table Definition
Input: getting salary information
Processing: calculate the tax
substract the tax to the wage
get the pay after tax

Output: show the result of the calculation
*/

function salary(){
	let hours = parseFloat(document.getElementById("hours").value);
	let wage = parseFloat(document.getElementById("wage").value);

	//gross calculation
	let gross = parseFloat(hours*wage);
	//tax calculation
	let tax = parseFloat(gross*0.15);
	
	let salaryAfterTax = parseFloat(gross - tax);
	

	//showing the final result in the HTML
	document.getElementById("output").innerHTML = salaryAfterTax;
}

