function Player(name) {
	this.name = name,
	this.results = [],
	this.saveResult = function(result) {
		this.results.push(result);
	}
}

var game = {

	states : ["arizona", "california", "florida", "ohio", "rhode island"],

	answers : [],

	playing: true,

	result : {},

	validateStates : function(answer) {
		answer = answer.toLowerCase();
		if (this.playing) {
			if ((this.states.indexOf(answer) != -1) && (this.answers.indexOf(answer) == -1)) {
				return true;
			} else {
				return false;
			}
		} else {
			console.log('Game already ended. Unable to save.');
		}
	},
	addState: function(answer) {
		this.answers.push(answer);
	},
	getResult : function(seconds, states) {
		this.result = {secondsRemaining: seconds, missingStates: states};
	},
	endGame : function() {
		this.playing = false;
	}
}
$(document).ready(function() {
	var val, statesInput = $('#states-input'); 

	// only respond to click event once
	statesInput.on('click', function(e) {
		gameLevel = $('#game-level').val();
		tick(gameLevel);
		$(this).off('click');
	});

	statesInput.on('input propertychange', function(e) {
		val = $(this).val();
		if ( game.validateStates(val) ) {
			game.addState(val);
			$(this).val('');
			$('#states').append('<li>' + val.toLowerCase() + '</li>');
		}
	});

});

	function tick(level) {
		switch(level) {
			case 'beginner':
			duration = 600000;
			break;
			case 'advanced':
			duration = 300000;
			break;
			case 'expert':
			duration = 150000;
			break;
			default:
			duration = 300000;
			break;
		}

		setTimeout(function() {game.endGame(); $('#mask').css('visibility', 'visible');}, duration);

	}