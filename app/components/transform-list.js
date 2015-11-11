import Ember from 'ember';

export default Ember.Component.extend({
	items: null,
	partialItem: 'partials/list-item',
	isList: true,
	classContainer: 'container',

	actions: {
		infinityLoad: function () {
			console.log('xD');
			this.sendAction();
		},
	},
});
