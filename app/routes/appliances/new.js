import Ember from 'ember';

export default Ember.Route.extend({
    actions: {
        next() {
            this.transitionTo('appliances.new-images');
        },
        cancel() {
            this.transitionTo('appliances');
        }
    }
});
