(function (window, undefined) {
	$('.english-version .language-switch').click(function() {
		$('.english-version').addClass('hide');
		$('.french-version').removeClass('hide');
	});
	$('.french-version .language-switch').click(function() {
		$('.french-version').addClass('hide');
		$('.english-version').removeClass('hide');
	});
})(window);