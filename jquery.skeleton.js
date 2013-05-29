;(function($, window, document, undefined){

	$.fn.skeleton = function(options) { 

		var defaults = {
			label: 'yeahhhhh',
			color: 'green',
			changeColor: 'orange'
		};

		var methods = {
			"username": "mauz0",
			"backupColor": false,

			"init": function (options) {
				options = $.extend({}, defaults, options);
				this.each(function(i){
					$(this).data('stuff', 'rofl'+i);
				});
				console.log('init');
				this.css('color', options.color);
			},
			"bar": function (options) {
				// Do whatever
				console.log('boem!');

				console.log(methods.getUsername());

				options = $.extend({}, defaults, options);
				this.css('color', options.color).text(this.text() + ' ' + options.label);
			},
			"getUsername": function() {
				return this.username;
			}, 
			"setUsername": function(name) {
				this.username = name;
			}, 
			"changeIt": function(params) {
				var localOptions = $.extend({}, defaults, params);
				console.log(this);
				this.css('color', localOptions.changeColor);
			},
			"setStuff": function(index, value) {
				console.log($(this[index]).data('stuff', value));
				
				//console.log(val, this);
			},
			"getStuff": function(index) {
				// console.log();
				var test = $(this[index]).data('stuff');
				console.log	(test);
			return $(this[index]).data('stuff');
			}
		};


		var args = arguments;
		var argss = Array.prototype.slice.call(args, 1);

		//return this.each(function() {
			var $this = $(this);  // Might make sense to ignore this and just pass `this` to the following things
			if (methods[options]) {
				methods[options].apply($this, argss);
			} else if (typeof options === "object" || !options) {
				methods.init.apply($this, args);
			} else {
				$.error("options " + options + " does not exist on jQuery.pollServer");
			}
		//});

		return this;
	};
})(jQuery, window, document);