import Ember from 'ember';

import ApplicationRouteMixin from 'simple-auth/mixins/application-route-mixin';

export default Ember.Route.extend(ApplicationRouteMixin, {

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
    error: function(error, transition) {
		var notify = this.get('notify');
		var message = notify.alert({html: error.responseText }, {
		  closeAfter: 5000,
		  radius: true
		});
      	return true;
    },

	willTransition: function(transition) { 
		this.controller.set('isShowMenu', false);
	}    
  }	
});

