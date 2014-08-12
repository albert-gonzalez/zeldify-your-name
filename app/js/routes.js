define(['./app'], function (app) {
    'use strict';
    return app.config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: 'app/js/partials/form.html',
            controller: 'form.controller'
        }).
            when('/convert/:gender/:names/:surnames', {
                templateUrl: 'app/js/partials/yourname.html',
                controller: 'search.controller'
            }).
             when('/convert/:gender/:names', {
                templateUrl: 'app/js/partials/yourname.html',
                controller: 'search.controller'
            }).
            otherwise({
                redirectTo: '/'
            });
    }]);
});
