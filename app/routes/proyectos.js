import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';
import InfinityRoute from "../mixins/infinity-route";

export default Ember.Route.extend(InfinityRoute, AuthenticatedRouteMixin, {
	_listName: 'model.proyectos',

	model: function() {
		return Ember.RSVP.hash({
          	proyectos: this.infinityModel("proyecto", { perPage: 25, startingPage: 1, ordering: '-codigo_anio, -codigo_num, -codigo_origen', tipo_camara: 'Diputados', firm_nombre_leg_func: this.get('session.user.diputado') })
     	});		
	},

	setupController: function (controller, model) {
		this._super(controller, model);

		var availableFilters = [];

		availableFilters.pushObject(Ember.Object.create({
			name: 'Cámara',
			values: ['Diputados', 'Senadores'],
			template: 'simple-select'
		}));

		availableFilters.pushObject(Ember.Object.create({
			name: 'Origen',
			values: ['Diputados', 'Senadores'],
			template: 'simple-select'
		}));

		availableFilters.pushObject(Ember.Object.create({
			name: 'Otro',
			values: ['Diputados', 'Senadores'],
			template: 'simple-select'
		}));


		controller.set('availableFilters', availableFilters);
	}
});

