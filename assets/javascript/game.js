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
});

function characterChoice(){
	$('.darth').click(function(){
		$('.yoda').appendTo('.enemiesSection')
		$('.leia').appendTo('.enemiesSection')
		$('.kylo').appendTo('.enemiesSection')
	})

	$('.yoda').click(function(){
		$('.darth').appendTo('.enemiesSection')
		$('.leia').appendTo('.enemiesSection')
		$('.kylo').appendTo('.enemiesSection')
	});

	$('.kylo').click(function(){
		$('.darth').appendTo('.enemiesSection')
		$('.leia').appendTo('.enemiesSection')
		$('.yoda').appendTo('.enemiesSection')
	});

	$('.leia').click(function(){
		$('.darth').appendTo('.enemiesSection')
		$('.kylo').appendTo('.enemiesSection')
		$('.yoda').appendTo('.enemiesSection')
	});
};
characterChoice();






