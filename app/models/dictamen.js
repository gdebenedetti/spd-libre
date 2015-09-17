import DS from 'ember-data';

export default DS.Model.extend({
	despacho: DS.belongsTo('despacho', {async: true}),
	tipo: DS.attr('string'),
	copete: DS.attr('string'),
	accion: DS.attr('string'),
	con_modificacion: DS.attr('string')
});