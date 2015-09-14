import OAuthCustomAuthenticator from '../authenticators/oauth-custom';
import SimpleAuthSession from 'simple-auth/session';

var CustomSession = SimpleAuthSession.extend({
	user: null,
	
    tokenChanged: function() {
      var userId = this.get('access_token');
      var _this = this;
      if (!Ember.isEmpty(userId)) {
		jQuery.getJSON('oauth/info_user/', function(json) {
		  // set all of the JSON properties on the model
		  _this.set('user', json);
		});
        return userId;
      }
    }.observes('access_token')
});

export default {
    name: 'oauth-custom',

    initialize: function(container) {
        container.register('oauth-custom:oauth2-password-grant', OAuthCustomAuthenticator);
        container.register('session:custom', CustomSession);
    }
};