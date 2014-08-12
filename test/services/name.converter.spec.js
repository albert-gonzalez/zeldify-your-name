define(['angular', 'app/js/services/name.converter'], function (ng) {
    'use strict';
    describe('Name Converter should convert names correctly"', function () {
        var injector,
            nameConverter;
        beforeEach(function () {
            injector = ng.injector(['app.services']);
            nameConverter = injector.get('NameConverter');
        });

        it('returns the same name if that name exists in the male array', function() {
            var params = {names: 'Link', surnames: 'Hylian', gender: 'male'},
                convertedName;
            nameConverter.get(params, function (data) {
                convertedName = data.convertedName;
            });
            expect(convertedName).toEqual('Link Hylian');
        });

        it('returns the same name if that name exists in the female array', function() {
            var params = {names: 'Zelda', surnames: 'Sheikah', gender: 'female'},
                convertedName;
            nameConverter.get(params, function (data) {
                convertedName = data.convertedName;
            });
            expect(convertedName).toEqual('Zelda Sheikah');
        });

        it('returns name choosen by the string hashcode if the name doesn\'t exists in the male array', function() {
            var params = {names: 'Jake', surnames: 'The Dog', gender: 'male'},
                convertedName;
            nameConverter.get(params, function (data) {
                convertedName = data.convertedName;
            });
            expect(convertedName).toEqual('Quill Deku Anouki');
        });

        it('returns name choosen by the string hashcode if the name doesn\'t exists in the female array', function() {
            var params = {names: 'Marceline', surnames: 'The Vampire', gender: 'female'},
                convertedName;
            nameConverter.get(params, function (data) {
                convertedName = data.convertedName;
            });
            expect(convertedName).toEqual('Blossom Deku Sheikah');
        });

        it('returns only the name if params have surnames empty', function() {
            var params = {names: 'Marceline', surnames: '', gender: 'female'},
                convertedName;
            nameConverter.get(params, function (data) {
                convertedName = data.convertedName;
            });
            expect(convertedName).toEqual('Blossom');
        });

        it('returns only the name if params doesn\'t have surnames', function() {
            var params = {names: 'Marceline', gender: 'female'},
                convertedName;
            nameConverter.get(params, function (data) {
                convertedName = data.convertedName;
            });
            expect(convertedName).toEqual('Blossom');
        });

        it('returns empty string if params doesn\'t have names and surnames', function() {
            var params = {gender: 'male'},
                convertedName;
            nameConverter.get(params, function (data) {
                convertedName = data.convertedName;
            });
            expect(convertedName).toEqual('');
        });

        it('returns empty string if params is not defined', function () {
            var params,
                convertedName;
            nameConverter.get(params, function (data) {
                convertedName = data.convertedName;
            });
            expect(convertedName).toEqual('');
        });

        it('returns empty string if params doesn\'t have gender', function () {
            var params = {names: 'Marceline'},
                convertedName;
            nameConverter.get(params, function (data) {
                convertedName = data.convertedName;
            });
            expect(convertedName).toEqual('');
        });
    });
});
