
function doFV()
{
	let message = "N/A";
	let principal  = parseInt(document.getElementById("principal").value);
	let rate= parseFloat(document.getElementById("rate").value);
	let years= parseInt(document.getElementById("years").value);
	let periods= parseInt(document.getElementById("periods").value);	
	
	let resul = 0;
	resul = computeFutureValue(principal,rate,years,periods);
	
	message = "$" + resul.toFixed(2) ;
	document.getElementById("output").innerHTML = message ;
	
}
function computeFutureValue(principal, annualRate, years, periodsPerYear)
{
	let resul = 0;
	resul = principal * Math.pow(1 + (annualRate)/periodsPerYear, periodsPerYear*years);

	return resul;
}



