import DS from 'ember-data';

export default DS.Model.extend({
  	name: DS.attr('string'),
  	filters: DS.hasMany('filter', {async: true}),
  	owner: DS.attr('string'),
  	module: DS.attr('string')
});
