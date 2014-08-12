define([
    'angular',
    './controllers/index',
    // './directives/index',
    // './filters/index',
    './services/index'
], function (ng) {
    'use strict';

    return ng.module('app', [
        'ngRoute',
        'ngAnimate',
        'app.services',
        'app.controllers'
        // 'app.filters',
        // 'app.directives'
    ]);
});

