var Vue = require('vue');
// use the following to allow server-side interaction
Vue.use(require('vue-resource'));

module.exports = new Vue({
	el: 'app',
	template: require('../../../templates/home/todo.html'),
	ready: function() {
		"use strict";
		
		this.$set('todos', []);
		this.$set('newTodo', '');
		if (localStorage.getItem('todos') !== '') {
			this.$set('todos', JSON.parse(localStorage.getItem('todos')));
		}
	},
	data: window.store,
	methods: {
		addTodo: function() {
			"use strict";
			var todos = this.$get('todos'),
				text = this.newTodo.trim();

			if (text) {
				todos.push({
					text: text,
					id: Math.round(Math.random() * 99999)
				});
				this.newTodo = '';
				this.$set('todos', todos);
				
				localStorage.setItem('todos',JSON.stringify(todos));
			}
		},
		updateTodo: function(todo) {
			"use strict";
			var todos = this.$get('todos'),
			td = _.findWhere(todos, {id: todo.id});
			td = todo;
			
			this.$set('todos', todos);
			localStorage.setItem('todos',JSON.stringify(todos));
		},
		removeTodo: function(index) {
			"use strict";
			var todos = this.$get('todos');
			todos.splice(index, 1);
			this.$set('todos', todos);
			localStorage.setItem('todos',JSON.stringify(todos));			
		}
	}
});
