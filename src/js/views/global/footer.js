var Vue = require('vue');

module.exports = new Vue({
	el: 'global-footer',
	template: require('../../../templates/global/footer.html'),
	data: function() {
		"use strict";
		return {
			msg: 'I am a Footer!'
		};
	}
});
