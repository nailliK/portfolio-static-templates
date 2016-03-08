/////     BOOTSTRAP    /////

module.exports = function() {
	"use strict";

	/////     GLOBAL REQUISITES     /////

	// global variables

	window.current_view = null;
	window.$ = window.jQuery = require('jquery');
	window._ = require('lodash');
	window.router = require('page');
	window.redactor = require('./vendor/redactor');
	window.flexibility = require('flexibility');


	/////     GLOBAL DATA     /////
	window.store = {
		
	};


	/////     GLOBAL DIRECTIVES     /////

	// select styler
	window.selectStyler = require('./directives/select_styler');


	/////     GLOBAL COMPONENTS     /////

	// global views
	window.header = require('./views/global/header');
	window.footer = require('./views/global/footer');


	/////     ROUTE FUNCTIONS     /////

	// home
	function home() {
		window.current_view = require('./views/home/index'); // vue
		
		//window.current_view = require('./views/home/index2'); // non-vue
		// window.current_view = require('./views/home/todo');
	}

	// /search/:query
	function search(n) {
		if (n) {
			//console.log(n.params.query);
		}
	}

	// 404
	function fourOhfour() {
		//console.log('page not found');
	}

	// styleguide
	function styleguide() {
		window.current_view = require('./views/styleguide/colorpalette');
	}


	/////     ROUTING DEFINITIONS     /////

	// define routes
	window.router('', home);
	window.router('/', home);
	window.router('/styleguide.html', styleguide);
	window.router('/search/:query', search);
	window.router('*', fourOhfour);

	// start the router
	window.router.start({
		click: false,
		popstate: false
	});


	/////     POST ROUTING     /////
	var classes = document.querySelector('body').className;
	document.querySelector('body').className += (classes.length) ? ' loaded' : 'loaded';
}();
