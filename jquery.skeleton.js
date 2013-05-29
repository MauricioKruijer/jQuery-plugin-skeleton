(function( $ ) {
	$.fn.skeleton = function(options) {
		var settings = $.extend({
			color: "#556b2f",
			backgroundColor: "white",
			controls: true
		}, options );

		var $t = $(this);
		
		function goToPosition(to) {
			$t.animate({left: to});
		}

		$t.bind('goToPosition', function (event, to) { 
			goToPosition(to);
		});

		// ik weet niet waarom ik dit niet in die .each() zet maar ja
		this.wrap('<div>');
		this.parent('div').css({width: 200, height: 100, overflow: 'hidden', position: 'relative'});
		this.css({'width': 750, position: 'absolute'});
		// einde
		
		return this.each(function() {
			var $this = $(this);

			
			$this.css('list-style', "none").children('li').css({'float': 'left', 'height': 90, width: 100, margin: 10, backgroundColor: 'red'});

			var $next = $('<a href="#">').text('next').click(function(e) {
					e.preventDefault();
					goToPosition('-=50');
				}),
				$prev = $('<a href="#">').text('prev').click(function(e) {
					e.preventDefault();
					goToPosition('+=50');
				}),
				$controls = $('<div>').css('border', '1px solid');

			$next.appendTo($controls);
			$prev.appendTo($controls);

			if(settings.controls) $controls.insertAfter($this.parent('div'));
		});
	}
}(jQuery));