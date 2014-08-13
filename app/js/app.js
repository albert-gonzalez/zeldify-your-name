define([
    'angular',
    './controllers/index',
    './services/index'
], function (ng) {
    'use strict';

    return ng.module('app', [
        'ngRoute',
        'ngAnimate',
        'app.services',
        'app.controllers'
    ]);
});

