$(document).ready(function() {
	var val, statesInput = $('#states-input');

	// only respond to click event once
	statesInput.on('click', function(e) {
		game.tick();
		$(this).off('click');
	});

	statesInput.on('input propertychange', function(e) {
		val = $(this).val();
		if ( game.validateStates(val) ) {
			game.addState(val);
			$(this).val('');
			$('#states').append('<li>' + val + '</li>');
		}
	});
});