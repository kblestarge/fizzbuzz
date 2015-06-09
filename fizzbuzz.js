var times = prompt("Enter a number to count to", "100");

var text;
var x = document.getElementById("fb");

for (var i = 1; i <= times; i++) {

	var element = document.createElement("DIV");
	element.className = "box";

	if(i % 3 === 0 & i % 5 ===0)	
	{
		element.classList.add("fizzbuzz");
		text = document.createTextNode("FIZZ\nBUZZ");
	}
	else if(i % 3 === 0)
	{
		element.classList.add("fizz");
    	text = document.createTextNode("FIZZ");
	}
	else if (i % 5 ===0)
	{
		element.classList.add("buzz");
		text = document.createTextNode("BUZZ");
	}
	else
	{
		element.classList.add("num");
		text = document.createTextNode(i);
	}

    element.appendChild(text);
    console.log(text);	
    x.appendChild(element);
}
