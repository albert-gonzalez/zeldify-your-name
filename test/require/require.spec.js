define([
    'app/js/app'
], function (app) {
    'use strict';
    describe('required app is an angular module an its name is "app"', function () {
        it('has app in the name property', function() {
            expect(app.name).toEqual('app');
        });
    });
});
