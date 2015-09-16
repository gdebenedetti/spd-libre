import DS from 'ember-data';

export default DS.Model.extend({
	cargo: DS.attr('string'),
	distrito: DS.attr('string'),
	fecha_incorporacion: DS.attr('date'),
	fecha_cese: DS.attr('date'),
	fecha_inicio: DS.attr('date'),
	fecha_fin: DS.attr('date'),
	nota: DS.attr('string'),
	matricula: DS.attr('string'),
	partido: DS.attr('string'),
	fk_persona_fisica: DS.belongsTo('personas-fisica', {async: true})
});