import Ember from 'ember';

export default Ember.Service.extend({
    items: null,
    newItem: {
        model: null,
        description: null
    },
    clearNewItem() {
        this.set('newItem', {
            model: null,
            description: null
        });
    },
    init() {
        this._super(...arguments);
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
    addNewItem(appliance) {
        this.get('items').pushObject(appliance);
    }
});
