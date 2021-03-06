import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('appliances', function () {
    this.route('index', { path: '/' });
    this.route('new');
  });
});

export default Router;
