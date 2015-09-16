import DS from 'ember-data';

export default DS.Model.extend({
	historico: DS.attr(''),
	tipo_doc: DS.attr('string'),
	numero_doc: DS.attr('string'),
	fecha_nacimiento: DS.attr('date'),

	datos: Ember.computed('historico', function () {
		var c = null;
		if (this.get('historico') && this.get('historico').length > 0) {
			c = this.get('historico')[0]
		}
		return c;
	}),
});