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

var currentCharacter = darthVader, yoda, kyloRen, princessLeia;
var currentEnemy = darthVader, yoda, kyloRen, princessLeia;


//When a character is chosen, the other 3 get put into enemies
//Is there a for loop/function to do this more compactly?
$(document).ready(function(){
function characterChoice (){
//When a character is clicked, the classes change accordingly and the divs move
	$('.characterSection').on('click','.darth',function(){
		$('.yoda, .kylo, .leia, .darth').removeClass('unassigned-character');
		$('.yoda, .kylo, .leia').addClass('enemy-character');
		$('.darth').addClass('selected-character');
		$('.yoda, .kylo, .leia').appendTo('.enemiesSection');
});
	$('.characterSection').on('click','.yoda',function(){
		$('.darth, .kylo, .leia .yoda').removeClass('unassigned-character');
		$('.darth, .kylo, .leia').addClass('enemy-character');
		$('.yoda').addClass('selected-character');
		$('.darth, .kylo, .leia').appendTo('.enemiesSection');
});
	$('.characterSection').on('click','.kylo',function(){
		$('.yoda, .darth, .leia, .kylo').removeClass('unassigned-character');
		$('.yoda .darth .leia').addClass('.enemy-character');
		$('.kylo').addClass('selected-character');
		$('.darth, .yoda, .leia').appendTo('.enemiesSection');
	});
	$('.characterSection').on('click','.leia',function(){
		$('.yoda, .kylo, .darth, .leia').removeClass('unassigned-character');
		$('.yoda .kylo .darth').addClass('enemy-character');
		$('.leia').addClass('selected-character');
		$('.darth, .yoda, .kylo').appendTo('.enemiesSection');
	});
};
characterChoice();

function enemyChoice(){
//Choosing your enemy and moving that character into defender section
	$('.enemiesSection').on('click','.darth',function(){
		$('.darth, .yoda, .kylo, .leia').removeClass('enemy-character');
		$('.yoda, .kylo, .leia').addClass('waiting-enemies');
		$('.darth').addClass('current-enemy1');
		$('.current-enemy1').appendTo('.defenderSection');
	});
	$('.enemiesSection').on('click','.yoda',function(){
		$('.darth, .yoda, .kylo, .leia').removeClass('enemy-character');
		$('.darth, .kylo, .leia').addClass('waiting-enemies');
		$('.yoda').addClass('current-enemy2');
		$('.current-enemy2').appendTo('.defenderSection');
	});
	$('.enemiesSection').on('click','.kylo',function(){
		$('.darth, .yoda, .kylo, .leia').removeClass('enemy-character');
		$('.darth, .yoda, .leia').addClass('waiting-enemies');
		$('.kylo').addClass('current-enemy3');
		$('.current-enemy3').appendTo('.defenderSection');
	});
	$('.enemiesSection').on('click','.leia',function(){
		$('.darth, .yoda, .kylo, .leia').removeClass('enemy-character');
		$('.darth, .yoda, .kylo').addClass('waiting-enemies');
		$('.leia').addClass('current-enemy4');
		$('.current-enemy4').appendTo('.defenderSection');
	});
};
enemyChoice();

//If healthPoints equal 0, remove from div
$('.attack').on('click', function(){
	if (darth.healthPoints <= 0);
		$('current-enemy1').remove();
});
$('.attack').on('click', function(){
	if (yoda.healthPoints <= 0);
		$('current-enemy2').remove();
});
$('.attack').on('click', function(){
	if (kylo.healthPoints <= 0);
		$('current-enemy3').remove();
});
$('.attack').on('click', function(){
	if (leia.healthPoints <= 0);
		$('current-enemy4').remove();
});

$('.attack').on('click', function(){
	//Call the various functions that affect scoring
// function scores(){
		currentEnemy.healthPoints = currentEnemy.healthPoints - currentCharacter.attackPower;
		currentCharacter.healthPoints = currentCharacter.healthPoints - currentEnemy.counterAttackPower;
	});
});








// //Creating a variable for each section
// var choice = $('.enemiesSection');
// var defender = $('.defenderSection');

// function darthChoice(){
// 	$('.darth').click(function(){
// 		$('.yoda').appendTo(choice);
// 		$('.leia').appendTo(choice);
// 		$('.kylo').appendTo(choice);
// 	})
// };

// function yodaChoice(){
// 	$('.yoda').click(function(){
// 		$('.darth').appendTo(choice);
// 		$('.leia').appendTo(choice);
// 		$('.kylo').appendTo(choice);
// 	})
// };

// function kyloChoice(){
// 	$('.kylo').click(function(){
// 		$('.darth').appendTo(choice);
// 		$('.leia').appendTo(choice);
// 		$('.yoda').appendTo(choice);
// 	})
// };

// function leiaChoice(){
// 	$('.leia').click(function(){
// 		$('.darth').appendTo(choice);
// 		$('.kylo').appendTo(choice);
// 		$('.yoda').appendTo(choice);
// 	});
// };

// //If any of these are clicked, all the other functions need to stop

// darthChoice();
// yodaChoice();
// kyloChoice();
// leiaChoice();

// //On 2nd click, the characters clicked on moves to defender section

// function darthDefender() {
// 	$('.darth').one('click',function(){
// 		$('darth').appendTo(defender);
// 	});
// }









