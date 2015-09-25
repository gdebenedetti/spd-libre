import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';
import InfinityRoute from "../mixins/infinity-route";

export default Ember.Route.extend(InfinityRoute, AuthenticatedRouteMixin, {
	_listName: 'model',

	model: function() {
	 	return this.infinityModel("proyecto", { perPage: 25, startingPage: 1, ordering: '-codigo_anio, -codigo_num, -codigo_origen', tipo_camara: 'Diputados', firm_nombre_leg_func: this.get('session.user.diputado') });
	},
});

