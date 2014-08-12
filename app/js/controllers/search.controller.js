define([
    './module'
], function (controllers) {
    'use strict';
    controllers.controller('search.controller', ['$scope', '$routeParams', 'NameConverter', function ($scope, $routeParams, nameConverter) {
        var convertedName;
        $scope.params = $routeParams;
        if ($scope.params !== undefined) {
            nameConverter.get($scope.params, function (data) {
                convertedName = data.convertedName;
            });

            $scope.convertedName = convertedName;
        }
    }]);
});
