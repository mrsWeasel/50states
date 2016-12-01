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