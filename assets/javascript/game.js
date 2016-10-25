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

$(document).ready(function(){
	$('.darth').click(function(){
		$('.yoda').appendTo('.enemiesSection')
		$('.leia').appendTo('.enemiesSection')
		$('.kylo').appendTo('.enemiesSection')
})
}); //If .darth is clicked, Darth div moves to enemies section



