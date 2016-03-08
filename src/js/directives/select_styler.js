var Vue = require('vue');

module.exports = Vue.directive('select-styler', {
	deep: true,
	bind: function () {
		"use strict";
		
		this.onSelect = function() {
			var sel = this.el.querySelector('select'),
				opt = this.el.querySelectorAll('option'),
				spn = this.el.querySelector('span');
				
			spn.innerHTML = opt[sel.selectedIndex].text;
		}.bind(this);
		this.el.querySelector('select').addEventListener('change', this.onSelect);
		
		this.onSelect();
	},
	unbind: function () {
		"use strict";

		this.el.querySelector('select').removeEventListener('change', this.onSelect);
	}
});
