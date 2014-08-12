var allTestFiles = [];
var TEST_REGEXP = /test\/.*\.spec\.js$/;

var pathToModule = function (path) {
    return path.replace(/^\/base\//, '').replace(/\.js$/, '');
};

Object.keys(window.__karma__.files).forEach(function (file) {
    if (TEST_REGEXP.test(file)) {
        // Normalize paths to RequireJS module names.
        allTestFiles.push(pathToModule(file));
    }
});

require.config({
  // Karma serves files under /base, which is the basePath from your config file
    baseUrl: '/base',

    paths: {
        jquery: 'components/jquery/dist/jquery.min',
        bootstrap: 'components/bootstrap/dist/js/bootstrap.min',
        angular: 'components/angular/angular.min',
        'angular-route': 'components/angular-route/angular-route.min',
        'angular-mocks': 'components/angular-mocks/angular-mocks',
        domReady: 'components/requirejs-domready/domReady'
    },

    shim: {
        angular: {
            exports: 'angular',
        },
        'angular-route': {
            exports: 'ngRoute',
            deps: ['angular']
        },
        'angular-mocks': {
            exports: 'ngMocks',
            deps: ['angular']
        },
        bootstrap: {
            deps: ["jquery"]
        }
    },

    // dynamically load all test files
    deps: allTestFiles,

    // we have to kickoff jasmine, as it is asynchronous
    callback: window.__karma__.start
});
