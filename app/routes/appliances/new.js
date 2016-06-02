import Ember from 'ember';

export default Ember.Route.extend({
    actions: {
        submit() {
            this.transitionTo('appliances');
        },
        cancel() {
            this.transitionTo('appliances');
        }
    }
});
