function multiply(list, multiplier)
{
	let size  = parseFloat(list.length);
	
	for(i=0;i < size;i++)
	{	
		list[i] =  list[i] * multiplier;
	}
	return list;
}

function show()
{
	let message = "";
	let num = 0;

	let array1 = new Array(5);
	let array2 = new Array(5);
	array1 = [1,2,3,4,5]; 

	array2 = multiply(array1, 2);
	let size  = parseFloat(array2.length);

	message = "[";
	for(i=0;i < size;i++)
	{	
		message = message + array2[i] + ","  ;
	}
	message = message + " ]";

	document.getElementById("output").innerHTML = " " + parseFloat(message) ;
}
