var darthVader = {
	healthPoints: 120,
	attackPower: 9,
	counterAttackPower: 6,
}

var yoda = {
	healthPoints: 180,
	attackPower: 12,
	counterAttackPower: 10,
}

var kyloRen = {
	healthPoints: 100,
	attackPower: 8,
	counterAttackPower: 10,
}

var princessLeia = {
	healthPoints: 150,
	attackPower: 10,
	counterAttackPower: 11,
}



//When a character is chosen, the other 3 get put into enemies
//Is there a for loop/function to do this more compactly?
$(document).ready(function(){

//Creating a variable for each section
var choice = $('.enemiesSection');
var defender = $('.defenderSection');

function darthChoice(){
	$('.darth').one('click',function(){
		$('.yoda').appendTo(choice);
		$('.leia').appendTo(choice);
		$('.kylo').appendTo(choice);
	})
};

function yodaChoice(){
	$('.yoda').one('click',function(){
		$('.darth').appendTo(choice);
		$('.leia').appendTo(choice);
		$('.kylo').appendTo(choice);
	})
};

function kyloChoice(){
	$('.kylo').one('click',function(){
		$('.darth').appendTo(choice);
		$('.leia').appendTo(choice);
		$('.yoda').appendTo(choice);
	})
};

function leiaChoice(){
	$('.leia').one('click',function(){
		$('.darth').appendTo(choice);
		$('.kylo').appendTo(choice);
		$('.yoda').appendTo(choice);
	});
};

//If any of these are clicked, all the other functions need to stop

darthChoice();
yodaChoice();
kyloChoice();
leiaChoice();

//On 2nd click, the characters clicked on moves to defender section

function darthDefender() {
	$('.darth').one('click',function(){
		$('darth').appendTo(defender);
	});
}


});//End of doc.ready function at top








