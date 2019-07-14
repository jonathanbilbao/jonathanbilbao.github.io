function addEnds(list)
{
	let sum  = 0;
	let ini  = parseFloat(list[0]);
	let fin  = parseFloat(list[list.length -1]);
	sum = ini + fin;
	return sum;
	
}

function show()
{
	let message = "";
	let suma = 0;
	let array1 = new Array(3);
	array1 = [7, 9, 11]; 
	
	suma = addEnds(array1);
	message = suma;
	document.getElementById("output").innerHTML = " " + parseFloat(message) ;
}
