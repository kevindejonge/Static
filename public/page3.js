

$(document).ready(function() {
	$(".fancybox").fancybox({
		openEffect: 'none',
		closeEffect: 'none'
	});
});

$('nav li ul').hide().removeClass('fallback');
$('nav li').hover(
	function() {
		$('ul', this).stop().slideDown(200);
	},
	function() {
		$('ul', this).stop().slideUp(200);
	}
);