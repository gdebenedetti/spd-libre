import Ember from 'ember';
import layout from '../templates/components/infinity-loader';

export default Ember.Component.extend({
  layout: layout,
  classNames: ["infinity-loader"],
  classNameBindings: ["infinityModel.reachedInfinity"],
  guid: null,
  scrollDebounce: 10,
  loadMoreAction: 'infinityLoad',
  loadingText: 'Loading Infinite Model...',
  loadedText: 'Infinite Model Entirely Loaded.',
  destroyOnInfinity: false,
  developmentMode: false,
  targetScroll: '',

  actions: {
    loadMore: function () {
      this.sendAction('loadMoreAction');
    },
  },

  didInsertElement: function() {
    this.set('guid', Ember.guidFor(this));
    this._bindScroll();
    this._checkIfInView();
  },

  willDestroyElement: function() {
    this._unbindScroll();
  },

  _bindScroll: function() {
    var _this = this;
      Ember.$(this.get('targetScroll')).on("touchmove.scrollable", function() {
        Ember.run.debounce(_this, _this._checkIfInView, _this.get('scrollDebounce'));
      });
      Ember.$(this.get('targetScroll')).on("scroll.scrollable", function() {
        Ember.run.debounce(_this, _this._checkIfInView, _this.get('scrollDebounce'));
      });      
  },

  _unbindScroll: function() {
    Ember.$(this.get('targetScroll')).off("touchmove.scrollable");
    Ember.$(this.get('targetScroll')).off("scroll.scrollable");
  },

  _checkIfInView: function() {
    var selfOffset   = this.$().offset().top;
    var windowBottom = Ember.$(this.get('targetScroll')).height() + this.$().height() * 3;
    console.log(selfOffset);
    console.log(windowBottom);
    var inView = selfOffset < windowBottom ? true : false;
    if (inView && !this.get('developmentMode')) {
      this.sendAction('loadMoreAction');
    }
  },

  loadedStatusDidChange: Ember.observer('infinityModel.reachedInfinity', 'destroyOnInfinity', function() {
    if (this.get('infinityModel.reachedInfinity') && this.get('destroyOnInfinity')) { this.destroy(); }
  })
});