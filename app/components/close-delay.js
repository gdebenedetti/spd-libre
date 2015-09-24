import Ember from 'ember';

export default Ember.Component.extend({
	classNames: ['close-panel'],

	actions: {
		close: function () {
			var _this = this;

			$(_this.get('target')).addClass(_this.get('closeClass'));

			Ember.run.later(function () {
				_this.container.lookup("router:main").transitionTo(_this.get('transitionTo'));
			}, _this.get('delay'));
		},
	}
});
