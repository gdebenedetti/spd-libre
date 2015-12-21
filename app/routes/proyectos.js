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

			Ember.Object.create({
				name: 'Código',
				template: 'input-text',
				field: 'codigo_exp'
			}),

			Ember.Object.create({
				name: 'Orden Del dia',
				template: 'input-number',
				field: 'od_numero'
			}),
			Ember.Object.create({
				name: 'Fecha Creacion',
				template: 'input-date',
				field: 'fecha_desde'
			}),
			Ember.Object.create({
				name: 'N° de Ley',
				template: 'input-number',
				field: 'nro_ley'
			}),
			Ember.Object.create({
				name: 'Resultado Sancion',
				values: ['APROBACIÓN SIMPLE', 'MEDIA SANCIÓN', 'RETIRO', 'SANCIÓN', 'ARCHIVO', 'RECHAZO'],
				template: 'simple-select',
				field: 'resultado'
			}),

			Ember.Object.create({
				name: 'Firmante',
				template: 'input-text',
				field: 'firm_nombre_leg_func'
			}),

			Ember.Object.create({
				name: 'Comision',
				field: 'giro_comision_nombre',
				template: 'input-text',
			}),
		]);

		controller.set('availableFilters', availableFilters);
	}
});

