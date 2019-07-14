function getMiddle(list)
{
	let size  = parseFloat(list.length);
	
	let middle = 0;
	let resul = 0;
	let num1, num2 = 0;
	if(size %2 ==0)
	{
		middle =Math.round(size/2) -1;
		num1 = list[middle];
		num2 = list[middle +1];
		resul = (parseInt(num1)+ parseInt(num2)) /2;
		
	}else
	{
		middle = Math.round(size/2) -1;

		resul = list[middle];
	}	
	return resul;
	
}

function show()
{
	let message = "";
	let num = 0;
	let array1 = new Array(5);
	array1 = [10,20,30,40,50]; 
	
	num = getMiddle(array1);
	message = num;
	document.getElementById("output").innerHTML = " " + parseFloat(message) ;
}
