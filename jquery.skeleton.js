;(function($, window, document, undefined){
	var defaults = {
		label: 'yeahhhhh',
		color: 'green'
	};

	var optionss = {
		"username": "mauz0r",

		"init": function (options) {
			options = $.extend({}, defaults, options);
			// Do whatever
			console.log(optionss.getUsername());
			optionss.setUsername("mau");

			console.log('init');
			this.css('color', options.color);
		},
		"bar": function (options) {
			// Do whatever
			console.log('boem!');

			console.log(optionss.getUsername());

			options = $.extend({}, defaults, options);
			this.css('color', options.color).text(this.text() + ' ' + options.label);
		},
		"getUsername": function() {
			// Why can't I use this. ?
			return optionss.username;
		}, 
		"setUsername": function(name) {
			// Why can't I use this. ?
			optionss.username = name;
		}
	};

	$.fn.skeleton = function(options) { 
		var args = arguments;
		var argss = Array.prototype.slice.call(args, 1);

		return this.each(function() {
			var $this = $(this);  // Might make sense to ignore this and just pass `this` to the following things
			if (optionss[options]) {
				optionss[options].apply($this, argss);
			} else if (typeof options === "object" || !options) {
				optionss.init.apply($this, args);
			} else {
				$.error("options " + options + " does not exist on jQuery.pollServer");
			}
		});
	};
})(jQuery, window, document);
