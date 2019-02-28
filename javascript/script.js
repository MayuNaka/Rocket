// Comments in a row, for explaining what a function does
/*
Comments in 
more than one row
*/

var learningcurve = function () {
	document.getElementById('cool').className = 'cool red';
}

var sayMyName = function (name) {
	alert('My name is: '+name)

}

var car = {
	make: 'VW',
	type: 'Polo',
	color: 'Blue',
	isTurnedOn: false,
	numberOfWheels: 4,
	seats: [
		'seat 1',
		'seat 2',
		'seat 3',
		'seat 4'
	],
	turnOn: function() {
		this.isTurnedOn = true;
	},
	fly: function() {
	alert('fly'); 	
	},
	switchCar: function (isOn) {
		console.log('turn car '+isOn);		;
		if (isOn == true) {
			this.isTurnedOn = true;
		} else {
			this.isTurnedOn = false;
		}
	}
};

console.log('Hello hello');