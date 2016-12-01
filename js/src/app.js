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