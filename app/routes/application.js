import Ember from 'ember';
import ApplicationRouteMixin from 'simple-auth/mixins/application-route-mixin';
import GoBackMixin from 'ember-smart-go-back/mixins/application-route';

export default Ember.Route.extend(ApplicationRouteMixin, GoBackMixin, {
 actions: {
    error: function() {
      this.render('error', {
        into: 'application'
      });
    }
  }	
});

