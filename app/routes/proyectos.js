import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';
import InfinityRoute from "../mixins/infinity-route";

export default Ember.Route.extend(InfinityRoute, AuthenticatedRouteMixin, {
	_listName: 'model.proyectos.content',

	model: function() {
		return Ember.RSVP.hash({
          	proyectos: this.infinityModel("proyecto", { perPage: 25, startingPage: 1, ordering: '-codigo_anio, -codigo_num, -codigo_origen', tipo_camara: 'Diputados', firm_nombre_leg_func: this.get('session.user.diputado') })
     	});		
	},

	actions: {
		search: function (filters) {
			var query = {perPage: 25, startingPage: 1, ordering: '-codigo_anio, -codigo_num, -codigo_origen'};
			filters.forEach(function (filter) {
				query[filter.get('type.field')] = filter.get('value');
			})
			this.set('controller.model.reachedInfinity', false);
			this.get('controller').set('model.proyectos', this.infinityModel("proyecto", query));
		}
	},

	setupController: function (controller, model) {
		this._super(controller, model);

		var availableFilters = [];

		availableFilters.pushObject(Ember.Object.create({
			name: 'Periodo',
			template: 'input-number',
			field: 'periodo'
		}));

		availableFilters.pushObject(Ember.Object.create({
			name: 'Origen',
			values: ['Diputados', 'Senadores'],
			template: 'simple-select',
			field: 'tipo_camara'
		}));

		availableFilters.pushObject(Ember.Object.create({
			name: 'Código',
			template: 'input-text',
			field: 'codigo_exp'
		}));	

		availableFilters.pushObject(Ember.Object.create({
			name: 'Orden Del dia',
			template: 'input-number',
			field: 'od_numero'
		}));

		availableFilters.pushObject(Ember.Object.create({
			name: 'Fecha Creacion',
			template: 'input-date',
			field: 'fecha_desde'
		}));

		controller.set('availableFilters', availableFilters);
	}
});

