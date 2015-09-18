import DS from 'ember-data';
import config from '../config/environment';

export default DS.RESTAdapter.extend({
	coalesceFindRequests: false,
	namespace: 'api',
	host: config.APP.host || '',

	pathForType: function(type) {
		var dasherized = Ember.String.underscore(type);
		return Ember.String.pluralize(dasherized);
	}
});