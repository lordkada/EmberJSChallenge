import Ember from 'ember';

export default Ember.TextField.extend({
    type: 'file',
    change: function (e) {
        let self = this;

        var inputFiles = e.target.files;
        if (inputFiles.length < 1) {
            return;
        }

        let inputFile = inputFiles[0];

        let fileInfo = {};

        var fileReader = new FileReader();

        fileReader.onload = function (e) {
            let fileReader = e.target;
            fileInfo.dataURL = fileReader.result;

            self.sendAction('fileChanged', fileInfo);
        };

        let firstFile = e.target.files[0];
        fileReader.readAsDataURL(firstFile);
    }
});
