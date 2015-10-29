import Ember from 'ember';
import ApplicationRouteMixin from 'simple-auth/mixins/application-route-mixin';
import GoBackMixin from 'ember-smart-go-back/mixins/application-route';

export default Ember.Route.extend(ApplicationRouteMixin, GoBackMixin, {
 
 model: function () {
 	var _this = this;
	var promise = new Promise(function(resolve, reject) {
		if (_this.get('session.isAuthenticated')) {
			var interval = setInterval(function () {
				if (_this.get('session.user')) {
					resolve(_this.get('session.user'));
					clearInterval(interval);
				}
			}, 500);
		} else {
			resolve(null);
		}
	}); 	
 	return promise;
 },

 actions: {
    error: function() {
      this.render('error', {
        into: 'application'
      });
    }
  }	
});

