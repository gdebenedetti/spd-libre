import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';
import InfinityRoute from "../../mixins/infinity-route";

export default Ember.Route.extend(InfinityRoute, AuthenticatedRouteMixin, {

	model: function (args) {
		return Ember.RSVP.hash({
          	citacion: this.get('store').find('citacion', args.citacion_id)
     	});		
	},
});