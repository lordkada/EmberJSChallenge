import Ember from 'ember';

export default Ember.Component.extend({
    appliances: Ember.inject.service('appliances-list'),
    actions: {
        next() {
            this.sendAction('next');
        },
        cancel() {
            this.get('appliances').clearNewItem();
            this.sendAction('cancel');
        }
    }
});
