import DS from 'ember-data';

export default DS.Model.extend({
	proyectos: DS.hasMany('proyecto', {async: true}),
	periodo: DS.attr('string'),
	fecha_impresion: DS.attr('date'),
	tipo: DS.attr('string'),
	visibilidad: DS.attr('number'),
	despacho: DS.belongsTo('despacho', {async: true}),
	numero: DS.attr('number'),
	anio: DS.attr('number'),
	fecha_art113: DS.attr('date'),

	proyecto_cabecera: Ember.computed('proyectos.@each', function () {
		if (this.get('proyectos')) {
			return this.get('proyectos').firstObject();
		} else {
			return null;
		}
	}),
});