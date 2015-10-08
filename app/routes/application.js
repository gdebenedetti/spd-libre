import Ember from 'ember';
import ApplicationRouteMixin from 'simple-auth/mixins/application-route-mixin';

export default Ember.Route.extend(ApplicationRouteMixin, {
 
 model: function () {
 	var _this = this;
	var promise = new Promise(function(resolve, reject) {
		var interval = setInterval(function () {
			if (_this.get('session.user')) {
				resolve(_this.get('session.user'));
				clearInterval(interval);
			}
		}, 500);
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

