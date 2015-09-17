import DS from 'ember-data';

export default DS.Model.extend({
	numero: DS.attr('number'),
	anio: DS.attr('number'),
	tipo_camara: DS.attr('string'),
	sumario: DS.attr('string'),
	art108par2: DS.attr('string'),
	tipo: DS.attr('string'),
	fecha_caducidad: DS.attr('date'),
	visibilidad: DS.attr('string'),
	unanimidad: DS.attr('string'),
	tramite_especial: DS.attr('string'),
	modificaciones: DS.attr('string'),
	texto_legado: DS.attr('string'),
	dictamenes: DS.hasMany('dictamen', {async: true}),
	ordenes_del_dia: DS.hasMany('od', {async: true}),
	proyectos: DS.hasMany('proyecto', {async: true})
});