import Ember from 'ember';

export default Ember.Controller.extend({
	isShowMenu: false,

	actions:{
		toggleMenu: function () {
			this.toggleProperty('isShowMenu');
		},
	},
});
