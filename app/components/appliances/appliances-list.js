import Ember from 'ember';

export default Ember.Component.extend({
    appliances: Ember.inject.service('appliances-list')
});
