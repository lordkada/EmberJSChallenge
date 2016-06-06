import Ember from 'ember';

export default Ember.Service.extend({
    items: null,
    itemsChanged: Ember.observer('items.length', function() {
        /* Update the session storage */
        window.sessionStorage.setItem('appliances.items', JSON.stringify(this.get('items')));
    }),
    init() {
        this._super(...arguments);

        /* Retrieve the session storage data */

        let _items = window.sessionStorage.getItem('appliances.items');
        if(_items) {
            this.set('items', JSON.parse(_items));
        } else {
            this.set('items', []);
        }

        let _newItem = window.sessionStorage.getItem('appliances.new');
        if(_newItem) {
            this.set('newItem', JSON.parse(_newItem));
        }
    },
    /* Property to hold the New Appliance data */
    newItem: {
        model: null,
        description: null,
        files: []
    },
    setNewItemFile(file) {
        this.get('newItem').files.pushObject(file);
    },
    setNewItem(newItem) {
        /* Update the session storage */
        window.sessionStorage.setItem('appliances.new', JSON.stringify(newItem));
    },
    validateNewItem() {
        var _newItem = this.get('newItem');
        return _newItem.model && _newItem.description && _newItem.files && (_newItem.files.length > 0);
    },
    /* Clear the New Appliance data */
    clearNewItem() {
        /* Clear the session storage */
        window.sessionStorage.removeItem('appliances.new');

        /* Reinitialize the new item */
        this.set('newItem', {
            model: null,
            description: null,
            files: []
        });
    },
    /* Add new appliance to database using REST API */
    addNewItem(appliance) {
        this.get('items').insertAt(0, appliance);
    }
});
