import Ember from "ember";
import config from "./config/environment";

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route("login");
  this.route("about");
  this.route("error");
  this.route("catchall", {path: '/*wildcard'});

  this.resource('proyectos', function() {
    this.route('show', { path: ':proyecto_id' });
  });

  this.resource('comisiones', function() {
    this.route('show', { path: ':comision_id' });
  });

  this.resource('ordenes-del-dia', function() {
    this.route('show', { path: ':ordenes_del_dia_id' });
  });

  this.resource('citaciones', function() {
    this.route('show', { path: ':citacion_id' });
  });
});

export default Router;