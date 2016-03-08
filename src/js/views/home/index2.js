var my_module = {
	say_hi: function() {
		"use strict";
		console.log('hi');
	},
	init: function() {
		"use strict";
		this.say_hi();
	}
};

module.exports = my_module.init();
