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
    this.route('show', { path: ':proyectos_id' });
  });

});

export default Router;