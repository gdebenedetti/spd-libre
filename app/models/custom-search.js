import DS from 'ember-data';

export default DS.Model.extend({
  	name: DS.attr('string'),
  	filters: DS.hasMany('filter', {async: true}),
  	owner: DS.attr('string'),
  	moduleName: DS.attr('string'),
  	edited: false,

  	isSomeDirty: Ember.computed('filters.@each.isDirty', 'isDirty', 'filters.length', 'edited', function () {
  		return this.get('filters').filterProperty('isDirty', true).length > 0 || this.get('isDirty') || this.get('edited');
  	}),

});
