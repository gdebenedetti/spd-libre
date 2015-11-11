import Ember from 'ember';

export default Ember.Component.extend({

	availableFilters: null,
	filters: null,
	showAvailableFilters: false,

	initFilters: function () {
		this.set('filters', []);
	}.on('didInsertElement'),

	actions: {

		toggleShowAvailableFilters: function () {
			this.toggleProperty('showAvailableFilters');
		},

		addFilter: function (availableFilter) {
			var filter = this.container.lookup("store:main").createRecord('filter', {
				type: availableFilter,
				name: availableFilter.get('name')
			});

			this.get('filters').pushObject(filter);
		},

		saveSearch: function (filter) {

		},

		removeFilter: function (filter) {
			this.get('filters').removeObject(filter);
		},

		search: function () {
			this.sendAction('action', this.get('filters'))
		},
	},	
});
