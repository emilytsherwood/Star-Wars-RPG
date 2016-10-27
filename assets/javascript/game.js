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
		$('.darth').addClass('current-enemy');
		$('.darth').appendTo('.defenderSection');
	});
	$('.enemiesSection').on('click','.yoda',function(){
		$('.darth, .yoda, .kylo, .leia').removeClass('enemy-character');
		$('.darth, .kylo, .leia').addClass('waiting-enemies');
		$('.yoda').addClass('current-enemy');
		$('.yoda').appendTo('.defenderSection');
	});
	$('.enemiesSection').on('click','.kylo',function(){
		$('.darth, .yoda, .kylo, .leia').removeClass('enemy-character');
		$('.darth, .yoda, .leia').addClass('waiting-enemies');
		$('.kylo').addClass('current-enemy');
		$('.kylo').appendTo('.defenderSection');
	});
	$('.enemiesSection').on('click','.leia',function(){
		$('.darth, .yoda, .kylo, .leia').removeClass('enemy-character');
		$('.darth, .yoda, .kylo').addClass('waiting-enemies');
		$('.leia').addClass('current-enemy');
		$('.leia').appendTo('.defenderSection');
	});
};
enemyChoice();

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









