jQuery(document).ready(function () {
	var $animationElements = jQuery('.animate');
	var $window = jQuery(window);

	// ps: Let's FIRST disable triggering on small devices!
	var isMobile = window.matchMedia("only screen and (max-width: 320px)");
	if (isMobile.matches) {
		$animationElements.removeClass('animate');
	}

	function checkIfInView() {
		var windowHeight = $window.height();
		var windowTopPosition = $window.scrollTop();
		var windowBottomPosition = (windowTopPosition + windowHeight);
		$.each($animationElements, function () {
			var $element = jQuery(this);
			var elementHeight = $element.outerHeight();
			var elementTopPosition = $element.offset().top - 0;
			var elementBottomPosition = (elementTopPosition + elementHeight);

			//check to see if this current container is within viewport
			if ((elementBottomPosition >= windowTopPosition) &&
				(elementTopPosition <= windowBottomPosition)) {
				$element.addClass('in-view');
			}
			// else {
			// 	$element.removeClass('in-view');
			// }
		});
	}
	$window.on('scroll resize', checkIfInView);
	$window.trigger('scroll');
});