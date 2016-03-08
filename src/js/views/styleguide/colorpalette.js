var Vue = require('vue');

Vue.component('sg-color-palette', {
	props: {
		colors: {
			type: Object
		}
	},
  template: require('../../../templates/styleguide/colorpalette.html')
});

new Vue({
  el: '#styleguide'
});