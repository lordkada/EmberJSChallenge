import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return {
            model: '',
            description: ''
        };
    },
    actions: {
        save(appliance) {
            alert( appliance.model + ' ' + appliance.description + ' is saved!');
        }
    }
});
