var Vue = require('vue');

module.exports = new Vue({
	el: 'app',
	template: require('../../../templates/home/index.html'),
	data: {
		message: 'Hello Vue.js!'
	},
	components: {
		homeArticle: require('./article'),
		homeAside: require('./aside'),
	}
});
