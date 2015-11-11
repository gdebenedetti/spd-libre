import Ember from 'ember';

export default Ember.Component.extend({

	partialName: Ember.computed('filter.name', function () {
		if (this.get('filter').get('name')) {
			return 'partials/filters/' + this.get('filter').get('type.template');
		}
		return null;
	}),

	actions: {
		removeFilter: function (filter) {
			this.sendAction('action', filter);
		}
	}
});
