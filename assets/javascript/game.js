$(document).ready(function() {

var starWars={
	darth: {
		name: 'Darth Vader',
		image: '../images/darthvaderlego.png',
    	healthPoints: 120,
   		attackPower: 9,
    	counterAttackPower: 6,
},

	yoda: {
		name: 'Yoda',
		image: '../images/yodalego.png',
    	healthPoints: 180,
    	attackPower: 12,
    	counterAttackPower: 10,
},

	kylo: {
		name: 'Kylo Ren',
		image: '../images/kyloren.png',
    	healthPoints: 100,
    	attackPower: 8,
    	counterAttackPower: 10,
},

 	leia: {
		name: 'Princess Leia',
		image: '../images/princessleialego.png',
    	healthPoints: 150,
   		attackPower: 10,
    	counterAttackPower: 11,
},
};
//Getting the healthPoints to display under the character
$('#darth').find('.caption-HP').html(starWars.darth.healthPoints);
$('#yoda').find('.caption-HP').html(starWars.yoda.healthPoints);
$('#kylo').find('.caption-HP').html(starWars.kylo.healthPoints);
$('#leia').find('.caption-HP').html(starWars.leia.healthPoints);

//When a character is chosen, the other 3 get put into enemies

//When a character is clicked, the classes change accordingly and the divs move
$('#characterSection').on('click', '#darth', function() {
    $('#yoda, #kylo, #leia, #darth').removeClass('unassigned-character');
    $('#yoda, #kylo, #leia').addClass('enemy-character');
    $('#darth').addClass('selected-character');
    $('#yoda, #kylo, #leia').appendTo('#enemiesSection');
});
});
$('#characterSection').on('click', '#yoda', function() {
    $('#darth, #kylo, #leia #yoda').removeClass('unassigned-character');
    $('#darth, #kylo, #leia').addClass('enemy-character');
    $('#yoda').addClass('selected-character');
    $('#darth, #kylo, #leia').appendTo('#enemiesSection');
});
$('#characterSection').on('click', '#kylo', function() {
    $('#yoda, #darth, #leia, #kylo').removeClass('unassigned-character');
    $('#yoda #darth #leia').addClass('enemy-character');
    $('#kylo').addClass('selected-character');
    $('#darth, #yoda, #leia').appendTo('#enemiesSection');
});
$('#characterSection').on('click', '#leia', function() {
    $('#yoda, #kylo, #darth, #leia').removeClass('unassigned-character');
    $('#yoda #kylo #darth').addClass('enemy-character');
    $('#leia').addClass('selected-character');
    $('#darth, #yoda, #kylo').appendTo('#enemiesSection');
});


//Choosing your enemy and moving that character into defender section
$('#enemiesSection').on('click', '#darth', function() {
    $('#darth, #yoda, #kylo, #leia').removeClass('enemy-character');
    $('#yoda, #kylo, #leia').addClass('waiting-enemies');
    $('#darth').addClass('current-enemy');
    $('.current-enemy').appendTo('#defenderSection');
});

$('#enemiesSection').on('click', '#yoda', function() {
    $('#darth, #yoda, #kylo, #leia').removeClass('enemy-character');
    $('#darth, #kylo, #leia').addClass('waiting-enemies');
    $('#yoda').addClass('current-enemy');
    $('.current-enemy').appendTo('#defenderSection');
});

$('#enemiesSection').on('click', '#kylo', function() {
    $('#darth, #yoda, #kylo, #leia').removeClass('enemy-character');
    $('#darth, #yoda, #leia').addClass('waiting-enemies');
    $('#kylo').addClass('current-enemy');
    $('.current-enemy').appendTo('#defenderSection');
});

$('#enemiesSection').on('click', '#leia', function() {
    $('#darth, #yoda, #kylo, #leia').removeClass('enemy-character');
    $('#darth, #yoda, #kylo').addClass('waiting-enemies');
    $('#leia').addClass('current-enemy');
    $('.current-enemy').appendTo('#defenderSection');
});

//Attack button
$('.attack').on('click', function() {
    '.currentEnemy'.healthPoints = '.currentEnemy'.healthPoints - '.currentCharacter'.attackPower;
    '.currentCharacter'.healthPoints = '.currentCharacter'.healthPoints - '.currentEnemy'.counterAttackPower;
    $('.caption-HP').html('.currentEnemy'.healthPoints - '.currentCharacter'.attackPower);
    $('.caption-HP').html('.currentCharacter'.healthPoints - '.currentEnemy'.counterAttackPower);
    //If healthPoints equal 0, remove from defenderSection div
    if ('.currentEnemy'.healthPoints <= 0);
    $('.defenderSection').remove('.currentEnemy');
});




















