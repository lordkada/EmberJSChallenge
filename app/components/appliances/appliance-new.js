import Ember from 'ember';

export default Ember.Component.extend({
    appliances: Ember.inject.service('appliances-list'),
    actions: {
        save(appliance) {
            this.get('appliances').addNewItem(appliance);
            this.get('appliances').clearNewItem();
            alert('The appliance \'' + appliance.model + '\' is added successfully!');
        },
        cancel() {
            this.get('appliances').clearNewItem();
        }
    }
});
