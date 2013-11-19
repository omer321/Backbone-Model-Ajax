define(['backbone', 'backbone-validation'
], function (Backbone, Validation) {

    'use strict';

    var Model = Backbone.Model.extend({
        // Using the response from https://gist.github.com/7536593
        // url: '/gh/gist/response.json/7536593/'
        defaults: {
            offerCode: '',
            amount: ''
        },
        validation: {
            offerCode: [{
                required: true,
                msg: 'You can\'t leave this empty'
            },{
                min: 6,
                msg: 'Your must use a 6 digit offer code'
            }],
            amount: {
                required: true,
                msg: 'You must choose an amount between $2,000 to $35,000'
            }
        }
    });

    var View = Backbone.View.extend({
        el: $('#form'),
        events: {
            'click .submit': 'goToNextPage'
        },
        initialize: function () {
            this.model.on('change', this.render, this);
            Backbone.Validation.bind(this, {
                valid: this.removeInputErrors,
                invalid: this.displayInputErrors
            });
        },
        removeInputErrors: function (view, attr) {
            //debugger;
            view.$el.find('input[name=' + attr + ']').removeClass('error');
            view.$el.find('.error_' + attr).html('').hide();
            //this.model.set('{' + attr
        },
        displayInputErrors: function (view, attr, error) {
            //debugger;
            view.$el.find('input[name=' + attr + ']').addClass('error');
            view.$el.find('.error_' + attr).html(error).show();
        },
        render: function () {
            console.log('offer code is:', this.model.attributes.offerCode);
            console.log('loan amount is:', this.model.attributes.amount);
        },
        goToNextPage: function (evt) {
            evt.preventDefault();
            if (this.model.isValid(true)) {
                console.log('model is valid.');
            } else {
                console.log('model is invalid.');
            }
        }
    });

    var model = new Model();
    var view = new View({ model: model });

});