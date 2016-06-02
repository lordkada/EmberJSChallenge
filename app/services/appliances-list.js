import Ember from 'ember';

export default Ember.Service.extend({
    items: null,
    init() {
        this._super(...arguments);
        /* Load the items from database using REST API */
        this.set('items', [
            {
                model: 'Prestige PRM 1.0 41018',
                description: '900-Watt Roti Maker with demo cd (Black)'
            },
            {
                model: 'Philips Viva Collection HD4928',
                description: '2100-Watt Induction Cooktop (Black)'
            }
        ]);
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
    /* Clear the New Appliance data */
    clearNewItem() {
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
