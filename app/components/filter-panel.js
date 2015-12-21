import Ember from 'ember';

export default Ember.Component.extend({

	availableFilters: null,
	filters: null,
	showAvailableFilters: false,
	searchs: null,
	currentSearch: null,
	moduleName: '',
	searchName: '',


	currentSearchChanged: function () {
		if (this.get('currentSearch')) {
			this.set('filters', this.get('currentSearch').get('filters'));
		} else {
			this.set('filters', []);
		}
	}.observes('currentSearch'),

	initFilters: function () {
		this.set('filters', []);
		this.set('searchs', this.container.lookup("store:main").find('custom-search', { moduleName: this.get('moduleName'), owner: this.get('owner')}));
	}.on('didInsertElement'),


	availableFiltersList: Ember.computed('availableFilters', 'filters.@each', 'currentSearch', function () {
		var _this = this;
		var list = this.get('availableFilters');
		var wo = [];

		var fs = this.get('filters') || [];

		fs.forEach(function (filter) {
			var t = _this.get('availableFilters').findBy('name', filter.get('type').name);
			wo.pushObject(t);
		});


		wo.forEach(function (w) {
			list = list.without(w);
		});

		return list;
	}),

	actions: {

		toggleShowAvailableFilters: function () {
			this.toggleProperty('showAvailableFilters');
		},

		addFilter: function (availableFilter) {
			var filter = this.container.lookup("store:main").createRecord('filter', {
				type: availableFilter,
				name: availableFilter.get('name')
			});

			this.get('filters').pushObject(filter);

			//this.toggleProperty('showAvailableFilters');

			if (this.get('currentSearch')) {
				this.get('currentSearch').get('filters').pushObject(filter);
				this.get('currentSearch').set('edited', true);
			}
		},

		saveSearch: function () {
			var promises = [];
			var _this = this;

			if (this.get('currentSearch')) {

				this.get('filters').forEach(function (filter) {
					if (filter.get('isDirty') || filter.get('isNew')) {
						promises.push(filter.save());
					}
				});	

				Ember.RSVP.Promise.all(promises).then(function(){ 
					_this.get('currentSearch').save();
					_this.get('currentSearch').set('edited', false);
				});			
			}
		},

		removeSearch: function () {
			var promises = [];
			var _this = this;

			if (this.get('currentSearch')) {

				this.get('currentSearch.filters').forEach(function (filter) {
					promises.push(filter.destroyRecord());
				});	

				Ember.RSVP.Promise.all(promises).then(function(){ 
					_this.get('currentSearch').destroyRecord();
					_this.set('currentSearch', null);
				});			
			}
		},		

		createSearch: function () {
			var promises = [];
			var _this = this;

			var s = this.container.lookup("store:main").createRecord('custom-search', {
				owner: this.get('owner'),
				moduleName: this.get('moduleName'),
				name: this.get('searchName')
			});

			_this.get('filters').forEach(function (filter) {
				s.get('filters').pushObject(filter);
			});	

			this.get('searchs.content').pushObject(s);
			this.set('currentSearch', s);

			this.set('searchName', '');

			this.get('filters').forEach(function (filter) {
				if (filter.get('isDirty') || filter.get('isNew')) {
					promises.push(filter.save());
				}
			});	

			Ember.RSVP.Promise.all(promises).then(function(){ 
				_this.get('currentSearch').save();
				_this.get('currentSearch').set('edited', false);
			});
		},

		removeFilter: function (filter) {
			this.get('filters').removeObject(filter);
			if (this.get('currentSearch')) {
				this.get('currentSearch').get('filters').removeObject(filter);
				this.get('currentSearch').set('edited', true);
			}
		},

		search: function () {
			this.sendAction('action', this.get('filters'));
			this.toggleProperty('showAvailableFilters');
		},
	},	
});
