var ForagerBee = function() {
	Grub.call(this);
	Bee.call(this);
	this.age = 10;
	this.job = 'find pollen';
	this.color ='yellow';
	this.canFly = true;
	this.treasureChest = [];
};


ForagerBee.prototype = Object.create(Grub.prototype);
ForagerBee.prototype.constructor = ForagerBee;

ForagerBee.prototype.forage =function(){
	this.treasureChest.push('treasure');
}