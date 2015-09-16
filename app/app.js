import Ember from 'ember';
import Resolver from 'ember/resolver';
import loadInitializers from 'ember/load-initializers';
import config from './config/environment';

Ember.MODEL_FACTORY_INJECTIONS = true;

/**
* Application constructor
*
* @class App
* @constructor
*/

Ember.Inflector.inflector.irregular('comision', 'comisiones');
Ember.Inflector.inflector.irregular('legislador', 'legisladores');
Ember.Inflector.inflector.irregular('citacion', 'citaciones');
Ember.Inflector.inflector.irregular('lugar', 'lugares');

var App = Ember.Application.extend({
	/**
	* @property modulePrefix
	* @type {Object}
	* @default config.modulePrefix
	*/	
	modulePrefix: config.modulePrefix,
	podModulePrefix: config.podModulePrefix,
	Resolver: Resolver
});

loadInitializers(App, config.modulePrefix);

export default App;
