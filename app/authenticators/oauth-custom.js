import Authenticator from 'simple-auth-oauth2/authenticators/oauth2';
import config from '../config/environment';

export default Authenticator.extend({
    makeRequest: function(url, data) {
        data.client_id = config.APP.client_id;
        data.client_secret = config.APP.client_secret;
        return this._super(url, data);
    }
});