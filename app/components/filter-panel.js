import Ember from 'ember';

export default Ember.Component.extend({

	availableFilters: null,
	filters: null,
	showAvailableFilters: false,

	initFilters: function () {
		this.set('filters', []);
	}.on('didInsertElement'),


	availableFiltersList: Ember.computed('availableFilters', 'filters.@each', function () {
		var list = this.get('availableFilters');
		this.get('filters').forEach(function (filter) {
			list = list.without(filter.get('type'));
		});
		return list;
	}),

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
			this.toggleProperty('showAvailableFilters');
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
