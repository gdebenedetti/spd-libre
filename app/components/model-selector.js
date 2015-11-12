import Ember from 'ember';

export default Ember.Component.extend({

	itemLabel: Ember.computed('value', function () {
		if (this.get('value')) {
			return this.get('value').get(this.get('labelField'));
		} else {
			return '';
		}
	}),

	items: Ember.computed('modelName', function () {
		return this.container.lookup("store:main").find(this.get('modelName'), {perPage: 100, tipo_camara: 'CD'})
	}),
});
