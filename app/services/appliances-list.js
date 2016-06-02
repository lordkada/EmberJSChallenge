import Ember from 'ember';

export default Ember.Service.extend({
    items: null,
    init() {
        this._super(...arguments);
        /* Load the items from database using REST API */
        this.set('items', [
            {
                model: 'Prestige PRM 1.0 41018',
                description: '900-Watt Roti Maker with demo cd (Black)',
                files: [{
                    dataURL: 'data:image/jpeg;base64,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'
                }, {
                    dataURL: 'data:image/jpeg;base64,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'
                }]
            },
            {
                model: 'Philips Viva Collection HD4928',
                description: '2100-Watt Induction Cooktop (Black)',
                files:[{
                    dataURL: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAEBAQEBAQEBAQEBAQEBAQIBAQEBAQIBAQECAgICAgICAgIDAwQDAwMDAwICAwQDAwQEBAQEAgMFBQQEBQQEBAT/2wBDAQEBAQEBAQIBAQIEAwIDBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAT/wAARCACWAJYDAREAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD+6iug5woAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKAPhb/go1+398Hf8Agmn+yv40/ak+M0d5rGk+Hr+x8OeFPAmi39tZeKviRrepXCw2mkaV5zBGlEa3V3KTnyrWwupSCIyKTdlcaTbsj86/+CSP/Bfv4Qf8FbfjT8Sfgv8ADr9n/wCJPwj1P4bfC9vihfa1418TaXrdhqUC6tp2k/ZYo7UB1k36ikm5vl2xsOpFKMuZ2Bxcdz9/aoQUAFABQAUAFABQAUAFABQAUAFABQAUAFABQB8//tPftTfAL9jX4N+Kfj5+0p8S/D3wr+F3hKHOoa/r0zNcajcukj2+m6ZZRhrm+v7jypBDZWkck8pRtqEKxCbSV2CTex/k4/8ABaj/AIK//Ez/AIKz/tFx+KntdX8Cfs3fC6S70X9n74RXt2ktxpNrOyLd6/rXlkxSavqQggaYIzx2sUUNvE8gjkuLjKUnI2jGx+wf/Blz/wAn3/tUf9mkP/6mXhinDcmp0P8ASLrUzCgAoAKACgAoAKACgAoAKACgAoAKACgAoA/AT/gpr/wcX/sF/wDBOuHxD4F0nxNbftPftK6RdSaU/wADPhHr8E1r4XvIt6yR+KvEqxzWWlGJ0MctqoudQR2XNkF3OsuSRSi2f5tH/BRz/gqN+1n/AMFQPi1/wsr9pDxoreHdCurkfDD4PeFlfS/hf8KbS5Kb4NLsSzNJPIscXn3928t1OUUNKI0iijybbepqopHzB8WP2Zfjn8C/A/wY+Ifxe+HWv/D7w3+0J4ZvPG/wgfxNANN1TxjolnPFbHWIrJj58dpPJL/o8syILhEMsYeJo5HQXT0P6pv+DLn/AJPv/ao/7NIf/wBTLwxVw3IqdD/SLrUzCgAoAKACgAoAKACgAoAKACgAoAKACgAoA/x9/FX/AATW/bY/4KEf8FHP22PC/wCyn8BfGHxEs7X9sL4j23iDx9Pbr4b+FnhHPjLWSx1TxJdmOwhcLudbYStcyhG8qGRhtrFpuTsbXSSuf2X/APBKf/g1P/Z0/ZG1fQPjX+2vrnhv9rH456U1tqugeAYdGli/Z7+HN9GVkMos7kCbX545F/dz6jFBagHJ04yKky2oJbkSm3oj8iP+D1REj/ad/YlRFVET4B+IEREUKiAeIYwAB2A9Kme46fU4T/gy5/5Pv/ao/wCzSH/9TLwxRDcKnQ/0i61MwoAKACgAoAKACgAoAKACgAoAKACgAoAKAKWn6bp2kWq2OlafZaZZJNLcLZ6fax2Vqsk8rzzuI0AXdJLJJI7YyzyMxySTQBdoA/zsf+D1f/k6D9if/sgviH/1IY6ynuaU+pwX/Blz/wAn3/tUf9mkP/6mXhiiG4VOh/pF1qZhQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQB/nY/wDB6v8A8nQfsT/9kF8Q/wDqQx1lPc0p9Tgv+DLn/k+/9qj/ALNIf/1MvDFENwqdD/SLrUzCgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgD/Ox/wCD1f8A5Og/Yn/7IL4h/wDUhjrKe5pT6nBf8GXP/J9/7VH/AGaQ/wD6mXhiiG4VOh/pF1qZhQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQB/nY/8AB6v/AMnQfsT/APZBfEP/AKkMdZT3NKfU4L/gy5/5Pv8A2qP+zSH/APUy8MUQ3Cp0P9IutTMKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKAP87H/g9X/wCToP2J/wDsgviH/wBSGOsp7mlPqcF/wZc/8n3/ALVH/ZpD/wDqZeGKIbhU6H+kXWpmFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFAH+dj/wer/8AJ0H7E/8A2QXxD/6kMdZT3NKfU4L/AIMuf+T7/wBqj/s0h/8A1MvDFENwqdD/AEi61MwoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoA8Y+KH7OH7PHxvv8AS9V+NHwG+DHxe1TQ7N9P0XUvih8LtD8f3+j28j+ZJBazX1tM8UbP8zJGQpbkjNKye4EPwx/Zo/Zx+CWrahr/AMGf2f8A4JfCPXdW07+x9V1r4Y/CrQvAWralaGWOb7LcXNjaxSSQ+ZFFJ5TsV3RqcZAILJbAe20wCgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKAP/2Q=='
                }, {
                    dataURL: 'data:image/jpeg;base64,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'
                }]
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
