import Ember from 'ember';

export default Ember.Component.extend({
    appliances: Ember.inject.service('appliances-list'),
    actions: {
        submit(appliance) {
            let _appliances = this.get('appliances');
            if(_appliances.validateNewItem()) {
                _appliances.addNewItem(appliance);
                _appliances.clearNewItem();
                alert('The appliance \'' + appliance.model + '\' is listed successfully!');
                this.sendAction('submit');
            }
        },
        reset() {
            this.get('appliances').clearNewItem();
        },
        backToList() {
            this.sendAction('cancel');
        },
        fileSelectionChanged(file) {
            this.get('appliances').setNewItemFile(file);
        }
    }
});
