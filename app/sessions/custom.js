import SimpleAuthSession from 'simple-auth/session';
import config from '../config/environment';

var CustomSession = SimpleAuthSession.extend({
	user: null,
  tokenChanged: function() {
    var userId = this.get('access_token');
    var _this = this;
    if (!Ember.isEmpty(userId)) {
  		jQuery.getJSON((config.APP.host || '') + 'oauth/info_user/', function(json) {
          $.ajax({
              type : "POST",
              url : (config.APP.host || '') + 'app/user/access',
              data : json,
              success : function(data) {
                data = JSON.parse(data);
                jQuery.getJSON((config.APP.host || '') + 'app/firmantesarha-get-by-user/' + json.cuil, function(firmantes) {
    		          _this.set('user', json);
                  _this.set('user.comisiones', data.comisiones);
                  if (firmantes[0]) {
                    var diputado = firmantes[0].nombre.split(", ");
                    _this.set('user.diputado', diputado[1] + " " + diputado[0]);
                  }
                });
              }
          });
  		});
      return userId;
    }
  }.observes('access_token')  
});

export default CustomSession;