import Ember from 'ember';

export default Ember.Component.extend({
    files: [],
    init() {
        this._super(...arguments);
        this.set('files', []);
    },
    actions: {
        fileSelectionChanged: function (file) {
            this.get('files').pushObject(file);
            this.sendAction('fileChanged', file);
        }
    }
});
