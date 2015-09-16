import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';
import InfinityRoute from "../../mixins/infinity-route";

export default Ember.Route.extend(InfinityRoute, AuthenticatedRouteMixin, {
  _listName: 'model',
  model: function() {
      return this.infinityModel("comision", { perPage: 25, startingPage: 1});
  },	
});

