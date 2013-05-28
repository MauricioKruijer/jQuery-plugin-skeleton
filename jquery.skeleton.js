(function($){

$.fn.skeleton = function(options) {

    // support multiple elements
		if (this.length > 1){
        
        this.each(function() { 
            $(this).skeleton(options) 
        });

        return this;
    }

    // private variables
    var pOne = '';
    var pTwo = '';
    // ...

    // private methods
    var foo = function() {
        // do something ...
        console.log("foo");
    }
    // ...

    // public methods        
    this.initialize = function() {
        // do something ...
        console.log("init");

        return this;
    };

    this.bar = function() {
        // do something ...
        console.log("bar");
        console.log(this);
    };

    return this.initialize();
}
})(jQuery);

var myPlugin = $('#foo').skeleton();
myPlugin.bar();

var myPlugin2 = $('#bar').skeleton();
myPlugin2.bar();
