import DS from 'ember-data';

export default DS.Model.extend({
	fk_comision: DS.belongsTo('comision', {async: true}), 
	fk_legislador: DS.belongsTo('legislador', {async: true}), 
	cargo: DS.attr('string'), 
	cargo_muestra_como: DS.attr('string'), 
	jerarquia: DS.attr('string'), 
	estado: DS.attr('string'), 
	fecha_desde: DS.attr('date'), 
	fecha_hasta: DS.attr('date'), 
	nota: DS.attr('string')
});