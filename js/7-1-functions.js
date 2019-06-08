
/*
Program Table Definition

Input: get  subtotal of the pruchase from user

Processing: 
get day of the week

if subtotal is greater than 50 AND day of the week is tuesday or wednesday, then discount 10% of the subtotal

calculate tax (subtotal * 0.06)

calculate total (subtotal + tax)

Output: show the result of the calculation
*/

function calculate(){
	let total = 0;
	let tax = 0;
	let mensaje = "";
	
	let subtotal = document.getElementById("subtotal").value;
	
	//getting the day of the week
	let dayOfWeek = new Date().getDay(); 
	
	//alert(dayOfWeek);
	
	if (subtotal > 50) 
	{
		if (dayOfWeek == 2 || dayOfWeek == 3 )
		{
			//get discount
			subtotal = parseFloat(subtotal - subtotal*0.1);
			mensaje = "Because today ir Tuesday or Wednesday , ";
		}	
	}
	tax = parseFloat(subtotal * 0.06);
	//alert(tax);
	total = parseFloat(subtotal) + parseFloat(tax);
	
	//alert(total);
	//creacion de mensaje final 
  mensaje = mensaje + "Your final Price is " + total;
	
	//showing the final result in the HTML
	document.getElementById("output").innerHTML = mensaje ;
}
