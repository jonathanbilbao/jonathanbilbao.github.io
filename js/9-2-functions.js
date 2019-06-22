
/*
Program Table Definition
Input: getting date information

Processing: 
we process each row and obtain each cell.
once we have every cell, we can identify the year and compare evey year with all the years in the table to find the oldest.

the way that I identify the oldest is assigning a very big number (2050) and ask if the first number in the table is lower than that number. Because it will be always lower, then the lowest number will be always the number in the first row. then I use the second row to compare with the first row and I do that until the end. in this way, i will have the oldest number always

Output: show the result of the calculation

*/

function oldestTemple() 
{
	let message = "";	
	let table = document.getElementById('templeData');
	
	let temple = ""; 
	let year = "";
	let square  = "";
	
	//define a very future age for a temple, so the first time we compare we replace the age
	let oldestYear = 2050;
	let oldestTemple = "";
	
	//get the total of cells in the table
	let rowLength = table.rows.length -1;
	
	//we review each row
	for (row=0;row <=rowLength;row++)
	{
		temple = table.rows[row].cells[0].innerHTML;
		year = parseInt(table.rows[row].cells[1].innerHTML);
		square  = table.rows[row].cells[2].innerHTML;
		if(year < oldestYear)
		{
			oldestTemple = temple;
			oldestYear = year;
		}	
		
		
	}
	
	message = oldestTemple + " (" + oldestYear + ")";
	document.getElementById("output").innerHTML = message ;
	
	
}
//we call the function once is load in the page
oldestTemple ();