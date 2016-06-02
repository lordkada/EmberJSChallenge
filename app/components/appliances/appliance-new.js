import Ember from 'ember';

export default Ember.Component.extend({
    appliances: Ember.inject.service('appliances-list'),
    actions: {
        submit(appliance) {
            let _appliances = this.get('appliances');
            if(_appliances.validateNewItem()) {
                _appliances.addNewItem(appliance);
                _appliances.clearNewItem();
                this.toggleProperty('isShowingModal');
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
        },
        toggleModal: function() {
            this.toggleProperty('isShowingModal');
            this.sendAction('submit');
        }
    }
});
