import Ember from 'ember';

export default Ember.TextField.extend({
    type: 'file',
    change: function (e) {
        let _this = this;

        if (e.target.files.length < 1) {
            return;
        }

        let fileReader = new FileReader();

        fileReader.onload = function (e) {
            _this.sendAction('fileChanged', { dataURL: e.target.result });
        };

        let firstFile = e.target.files[0];
        fileReader.readAsDataURL(firstFile);
        
        e.target.value = '';
    }
});
