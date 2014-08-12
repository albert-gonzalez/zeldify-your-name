requirejs.config({
    baseUrl: '../../',
    paths: {
        jquery: 'components/jquery/dist/jquery.min',
        bootstrap: 'components/bootstrap/dist/js/bootstrap.min',
        angular: 'components/angular/angular.min',
        'angular-route': 'components/angular-route/angular-route.min',
        'angular-animate': 'components/angular-animate/angular-animate.min',
        domReady: 'components/requirejs-domready/domReady'
    },

    shim: {
        angular: {
            exports: 'angular',
            deps: ['jquery']
        },
        'angular-route': {
            exports: 'ngRoute',
            deps: ['angular']
        },
        'angular-animate': {
            exports: 'ngAnimate',
            deps: ['angular']
        },
        bootstrap: {
            deps: ["jquery"]
        }
    }
});
