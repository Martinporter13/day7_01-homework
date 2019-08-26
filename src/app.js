import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
	new Vue({
		el: "#app",
		data: {
      lists: [{task: "Homework", priority: "High", done: false},
   {task: "Gym", priority: "Low", done: true},
   {task: "Make Dinner", priority: "High", done: false}],
			newListItem: ""
		},
		methods: {
      saveNewListItem: function () {
				const listItemToAdd = {task: this.newListItem, done: false}
			 this.lists.push(listItemToAdd);
			 this.newListItem = "";
		 },

			completeListItem: function (index) {
			  this.lists[index].done = true;
			}
    		}
	});
});
