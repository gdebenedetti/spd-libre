import DS from 'ember-data';

export default DS.Model.extend({
	fk_lugar: DS.belongsTo('lugar', {async: true}),
	fk_comision_cabecera: DS.belongsTo('comision', {async: true}),
	//temario: DS.hasMany('temario', {async: true}),
	comisiones: DS.hasMany('comision', {async: true}),
	estado: DS.attr('string'),
	resumen: DS.attr('string'),
	observaciones: DS.attr('string'),
	visibilidad: DS.attr('string'),
	reunion_conjunta: DS.attr('string'),
	fecha: DS.attr('date')

});