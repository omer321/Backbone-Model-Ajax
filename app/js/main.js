require.config({
    paths: {
        'jquery': '../js/vendor/jquery.min',
        'underscore': '../js/vendor/underscore-min',
        'backbone': '../js/vendor/backbone-min',
        'backbone-validation': '../js/vendor/backbone-validation'
    },
    shim: {
        'backbone': {
            deps: ['jquery', 'underscore'],
            exports: 'Backbone'
        },
        'backbone-validation': {
            deps: ['jquery', 'underscore', 'backbone'],
            exports: 'Backbone'
        },
        'jquery': {
            exports: 'jQuery'
        }

    }
});

require(['app', 'jquery'], function (app, $) {
    'use strict';
    // use app here
    console.log(app);
    console.log('Running jQuery %s', $().jquery);
});
