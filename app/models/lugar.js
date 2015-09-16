import DS from 'ember-data';

export default DS.Model.extend({
	nombre: DS.attr('string'),
	direccion: DS.attr('string'),
	ubicacion: DS.attr('string'),
	piso: DS.attr('string'),
	oficina: DS.attr('string'),
	telefono: DS.attr('string'),
	interno: DS.attr('string'),
	capacidad_max: DS.attr(''),
	observaciones: DS.attr('string')	
});