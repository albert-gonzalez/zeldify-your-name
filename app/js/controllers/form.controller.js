define([
    './module'
], function (controllers) {
    'use strict';
    controllers.controller('form.controller', ['$scope', '$location', function ($scope, $location) {
        $scope.formData = {gender: 'male'};
        $scope.submit = function () {
            var formData = $scope.formData;
            $scope.form.$submitted = true;
            if ($scope.form.$valid) {
                if (formData.surnames) {
                    $location.url('convert/' + formData.gender + '/' + formData.names + '/' + formData.surnames);
                } else {
                    $location.url('convert/' + formData.gender + '/' + formData.names);
                }
            }
        };
    }]);
});
