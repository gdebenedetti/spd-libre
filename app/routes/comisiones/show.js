import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';
import InfinityRoute from "../../mixins/infinity-route";

export default Ember.Route.extend(InfinityRoute, AuthenticatedRouteMixin, {
	_listName: 'model.proyectos',

	model: function (args) {
		return Ember.RSVP.hash({
          	comision: this.get('store').find('comision', args.comision_id),
          	proyectos: this.infinityModel("proyecto", { perPage: 25, startingPage: 1, giro_comision_id: args.comision_id, ordering: '-codigo_anio, -codigo_num, -codigo_origen'}),
          	citaciones: this.get('store').find('citacion', {comision_id: args.comision_id}),
     	});		
	},
});