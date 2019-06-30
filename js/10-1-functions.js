
/*
The first function (doInputOutput) must be called from the onclick attribute of the button and must do the following:

    Get a temperature from the first text field
    Get a wind speed from the second text field
    Call the second function (windChill)
    Store the value returned by windChill in a variable
    Output the value returned by windChill to the screen for the user to see

The second function (windChill) must

    Take a temperature in Fahrenheit as a parameter and take a wind speed in miles per hour as a parameter
    Determine IF we can define the wind chill factor based upon the maximum temperature constraint (50°F) and minimum wind speed constraint (3 mph). If the input parameters do not meet those constraints, then the function should return "N/A" which means "Not Applicable".
    Calculate the wind chill factor as a temperature in Fahrenheit
    Return the wind chill factor in Fahrenheit

*/

function doInputOutput()
{
	let message = "N/A";
	let temp  = parseInt(document.getElementById("temp").value);
	let wind = parseInt(document.getElementById("wind").value);
	
	let resul = 0;
	resul = windChill(temp,wind);
	
	//in the function, we defined -999 when it is not possible calculate the windchill
	if(resul !== -999)
	{
		message = resul + " &deg";
	}	
document.getElementById("output").innerHTML = message ;
	
}
function windChill(tempF, speed)
{
	//we define -999 when it is not possible calculate the windchill
	let valor = -999;
	
  if(tempF < 50 && speed > 3 )
	{
		let part1 = 35.74 ;
		let part2 = 0.6215 * tempF;
		let part3 = 35.75 * Math.pow(speed,0.16);
		let part4 = 0.4275 * tempF * Math.pow(speed,0.16);

		valor = part1 + part2 - part3 + part4;	
	}	

return valor;

}

