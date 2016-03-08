var Vue = require('vue');

module.exports = new Vue({
	el: 'global-header',
	template: require('../../../templates/global/header.html'),
	data: {
		links: [
			{
				text: 'Home',
				title: 'Go Home',
				href: '/#home'
			},
			{
				text: 'About',
				title: 'About Us',
				href: '/#about'
			},
			{
				text: 'Contact',
				title: 'Contact Us',
				href: '/#contact'
			}
		]
	}
});
