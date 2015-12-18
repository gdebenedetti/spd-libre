import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';
import InfinityRoute from "../mixins/infinity-route";

export default Ember.Route.extend(InfinityRoute, AuthenticatedRouteMixin, {
	_listName: 'model',

	model: function() {
	  	return this.infinityModel("od", { perPage: 25, startingPage: 1});
	},	

	actions: {
		search: function (filters) {
			var query = {perPage: 25, startingPage: 1, ordering: '-codigo_anio, -codigo_num, -codigo_origen'};
			filters.forEach(function (filter) {
				var value = filter.get('value');
				//console.log(Ember.typeOf(value));
				query[filter.get('type.field')] = value;
			})
			this.set('controller.model.reachedInfinity', false);
			this.get('controller').set('model.proyectos', this.infinityModel("proyecto", query));
		}
	},

	setupController: function (controller, model) {
		this._super(controller, model);

		var availableFilters = [];

		availableFilters.pushObjects([
			Ember.Object.create({
				name: 'Periodo',
				template: 'input-number',
				field: 'periodo'
			}),

			Ember.Object.create({
				name: 'Origen',
				values: ['Diputados', 'Senadores'],
				template: 'simple-select',
				field: 'tipo_camara'
			}),

			


		]);

		controller.set('availableFilters', availableFilters);
	}
});

