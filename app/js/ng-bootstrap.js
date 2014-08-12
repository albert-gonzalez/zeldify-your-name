define([
    'require',
    'angular',
    'angular-route',
    'angular-animate',
    'bootstrap',
    './app',
    './routes'
], function (require, ng) {
    'use strict';

    require(['domReady!'], function (document) {
        ng.bootstrap(document, ['app']);
    });
});
