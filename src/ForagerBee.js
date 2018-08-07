var ForagerBee = function() {
	Bee(this);
	this.age = 10;
	this.job = 'find pollen';

};


ForagerBee.prototype = Object.create(Beee);
ForagerBee.prototype.constructor = ForagerBee;
