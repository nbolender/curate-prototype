$(document).ready(function () {
	var blurOn = true;
	
	var $figure = $("figure.bar");
	$figure.on("webkitTransitionEnd oTransitionEnd MSTransitionEnd transitionend", function () {
		if ($figure.is(".blurred")) {
			$figure.removeClass("blurred");
		}
	});
	
	$("button#start").on("click", function () {
		$figure.toggleClass("flipped");
		if (blurOn) {
			$figure.toggleClass("blurred");
		}
	});
	
	$("button#blurToggle").on("click", function () {
		if (blurOn) {
			blurOn = false;
			$(this).text("Turn blur effect ON");
		} else {
			blurOn = true;
			$(this).text("Turn blur effect OFF");
		}
	});
});