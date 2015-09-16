import DS from 'ember-data';

export default DS.Model.extend({
	caracter: DS.attr('string'),
	tipo_camara: DS.attr('string'),
	norma_creacion: DS.attr('string'),
	fecha_inicio: DS.attr('date'),
	fecha_fin: DS.attr('date'),
	sigla: DS.attr('string'),
	comision_hist: DS.attr(''),
	legisladores: DS.hasMany('legisladores-comision', {async: true}),

	datos: Ember.computed('comision_hist', function () {
		var c = null;
		if (this.get('comision_hist').length > 0) {
			c = this.get('comision_hist')[0];
		}
		return c;
	}),
});