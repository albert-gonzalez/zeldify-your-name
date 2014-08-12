define(['angular-mocks', 'app/js/controllers/form.controller'], function () {
    'use strict';
    describe('Form controller', function () {

        var location,
            scope;

        beforeEach(function () {
            location = jasmine.createSpyObj('location', ['url']);
            module('app.controllers');
            inject(function($rootScope, $controller) {
                scope = $rootScope.$new();
                $controller('form.controller', {$scope: scope, $location: location});
            });
        });

        it('calls $location.url with url formed with 3 params if the form is valid', function () {
            var url;
            scope.form = {$valid: true};
            scope.form.$submitted = true;
            scope.formData.names = 'Link';
            scope.formData.gender = 'male';
            scope.formData.surnames = 'Hylian';
            url = 'convert/' + scope.formData.gender + '/' + scope.formData.names + '/' + scope.formData.surnames;
            scope.submit();
            expect(location.url).toHaveBeenCalledWith(url);
        });

        it('calls $location.url with url formed with 2 params if the form is valid', function () {
            var url;
            scope.form = {$valid: true};
            scope.form.$submitted = true;
            scope.formData.names = 'Link';
            scope.formData.gender = 'male';
            url = 'convert/' + scope.formData.gender + '/' + scope.formData.names;
            scope.submit();
            expect(location.url).toHaveBeenCalledWith(url);
        });

        it('does nothing if the the form is not valid', function () {
            scope.form = {$valid: false};
            scope.form.$submitted = true;
            scope.submit();
            expect(location.url.calls.count()).toEqual(0);
        });
    });
});
