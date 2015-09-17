import DS from 'ember-data';

export default DS.Model.extend({
	fk_comision: DS.belongsTo('comision', {async: true}),
	orden: DS.attr('number'),
	caracter: DS.attr('string'),
	nota: DS.attr('string'),
	nro_giro: DS.attr('number'),
	fecha_vigencia: DS.attr('date'),
	fecha: DS.attr('date'),
	fecha_remito: DS.attr('date')
});