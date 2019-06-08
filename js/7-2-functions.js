
/*
Program Table Definition
Input: getting date information

Processing: 
obtain day and month.
with this information, we validate if we are in a holiday or not.
we also get the day of the week to see if we are in weekend or not

we prepare a message depending of the conditions

Output: show the result of the calculation

*/

function getDayOfWeek() 
{
  let dayOfWeek = new Date().getDay();
	return dayOfWeek;
}

function getDay() 
{
  let day = new Date().getDate();
	return day;
}
function getMonth() 
{
  let month = new Date().getMonth();
	//because January starts in 0
	month = month + 1;
	return month;
}

function getToday()
{
	let text = "";
	let dayNumber = getDayOfWeek();
	switch(dayNumber) 
	{
		case 1:
			text = "Monday";		
			break;
		case 2:
			text = "Tuesday";		
			break;
		case 3:
			text = "Wednesday";		
			break;
		case 4:
			text = "Thursday";		
			break;
		case 5:
			text = "Friday";		
			break;
		case 6:
			text = "Saturday";		
			break;
		case 7:
			text = "Sunday";		
			break;
		
		default:
	}

	return text;
}
	
function isHoliday(day, month)
{
	let boolHoliday = false;
	
	//january 01
	if (day==1 && month==1)
	{
		boolHoliday = true;		
	}

	//december 25
	if (day==25 && month==12)
	{
		boolHoliday = true;		
	}
	
	//july 04
	if (day==4 && month==7)
	{
		boolHoliday = true;		
	}
	return boolHoliday;
}

function showMessages()
{
	let day = getDay();
	let month = getMonth();
	let boolHoliday = isHoliday(day,month);
	let dayOfWeek = getDayOfWeek();
  let mensaje = "";
	let today = getToday();
	
	if (boolHoliday || dayOfWeek ==6 || dayOfWeek ==7)
	{
		mensaje = "Sleep In";
	}
	else
	{
		mensaje = "Wake Up";
	}	

		
	//showing the final result in the HTML
	document.getElementById("today").innerHTML = today + " " + month + "/" + day;

	document.getElementById("output").innerHTML = mensaje ;

}
//when the page is loaded, we obtaing the information
showMessages();
