define(['angular-mocks', 'app/js/controllers/search.controller'], function () {
    'use strict';
    describe('Search controller', function () {

        var scope,
            nameConverter,
            routeParams,
            defineController;

        defineController = function (routeParams) {
            inject(function($rootScope, $controller) {
                scope = $rootScope.$new();
                $controller('search.controller', {$scope: scope, $routeParams: routeParams, NameConverter: nameConverter});
            });
        }

        beforeEach(function () {
            nameConverter = jasmine.createSpyObj('nameConverter', ['get']);
            nameConverter.get.and.callFake(function (params, callback) {
                callback({convertedName: 'Link Hylian'});
            });
            module('app.controllers');
        });

        it('calls NameConverter with route Params and set $scope.convertedName with the returned value', function () {
            var serviceParams;
            routeParams = {names: 'Link', surnames: 'Hylian', gender: 'male'}
            defineController(routeParams);

            serviceParams = nameConverter.get.calls.argsFor(0)[0];

            expect(nameConverter.get).toHaveBeenCalled();
            expect(serviceParams).toEqual(routeParams);
            expect(scope.convertedName).toEqual('Link Hylian');
        });

        it('does nothing if params is undefined', function () {
            routeParams = undefined;
            defineController(routeParams);

            expect(nameConverter.get.calls.count()).toEqual(0);
            expect(scope.convertedName).toEqual(undefined);
        });
    });
});
