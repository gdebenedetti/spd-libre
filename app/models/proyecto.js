import DS from 'ember-data';

export default DS.Model.extend({
	codigo_exp: DS.attr('string'),
	sumario: DS.attr('string'),
	tipo_camara: DS.attr('string'),
	tipo_proy: DS.attr('string'),
	tipo: DS.attr('string'),
	fecha_caducidad: DS.attr('date'),
	fecha: DS.attr('date'),
	periodo: DS.attr('string'),
	titulo: DS.attr('string'),

	firmantes: DS.attr(''),

	giros: DS.hasMany('giro', {async: true})
});