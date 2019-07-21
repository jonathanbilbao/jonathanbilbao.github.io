function countEvens(list)
{
	let cant = 0;
	let size  = parseFloat(list.length);

	for(i=0;i < size;i++)
	{	
		if(list[i] %2 ==0)
		{
			cant++;
		}
	}
	return cant;
	
}

function show()
{
	let message = "";
	let num = 0;
	let array1 = new Array(5);
	array1 = [10,20,3,40,5]; 
	
	num = countEvens(array1);
	message = num;
	document.getElementById("output").innerHTML = " " + parseFloat(message) ;
}
