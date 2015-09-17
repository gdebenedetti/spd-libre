import DS from 'ember-data';

export default DS.Model.extend({
	numero: DS.attr('number'),
	anio: DS.attr('number'),
	fecha_art113: DS.attr('date'),
	nro_periodo: DS.attr('number'),
	fecha_inicio: DS.attr('date'),
	fecha_fin: DS.attr('date'),
	anio_parlamentario: DS.attr('number')	
});