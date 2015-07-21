(function() {
	var app = angular.module('FizzedBuzzed', []);

	app.controller('FizzController', function(){
	this.boxes = fbBoxes;
	});

	var times = prompt("Enter a number to count to", "100");

	var fbBoxes = [];

	for (var i = 1; i <= times; i++) {

		if(i % 3 === 0 & i % 5 ===0)	
		{
			fbBoxes.push({name: 'FIZZ\nBUZZ', class: 'fizzbuzz'});
		}
		else if(i % 3 === 0)
		{
			fbBoxes.push({name: 'FIZZ', class: 'fizz'});
		}
		else if (i % 5 ===0)
		{
			fbBoxes.push({name: 'BUZZ', class: 'buzz'});
		}
		else
		{
			fbBoxes.push({name: i, class: 'num'});
		}
	}
})();
