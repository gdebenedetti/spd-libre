import SimpleAuthSession from 'simple-auth/session';

var CustomSession = SimpleAuthSession.extend({
	user: null,
  tokenChanged: function() {
    var userId = this.get('access_token');
    var _this = this;
    if (!Ember.isEmpty(userId)) {
  		jQuery.getJSON('oauth/info_user/', function(json) {
          $.ajax({
              type : "POST",
              url : "app/user/access",
              data : json,
              success : function(data) {
                data = JSON.parse(data);  
  		          _this.set('user', json);
                _this.set('user.comisiones', data.comisiones);
              }
          });
  		});
      return userId;
    }
  }.observes('access_token')  
});

export default CustomSession;