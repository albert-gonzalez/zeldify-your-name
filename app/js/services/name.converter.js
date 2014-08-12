/*jslint bitwise: true */
define([
    'jquery',
    './module',
    'app/js/data/names',
    'app/js/data/surnames'
], function ($, services, namesData, surnamesData) {
    'use strict';
    return services.factory('NameConverter', [function () {
        return {
            get: function (params, callback) {
                var transformedNames,
                    transformedSurnames,
                    transformedNamesAndSurnames = [];

                if (this.isParamsValid(params)) {
                    transformedNames = this.convertNames(params.names, params.gender);
                    transformedSurnames = params.surnames ? this.convertSurnames(params.surnames) : [];
                    transformedNamesAndSurnames = transformedNames.concat(transformedSurnames);
                }

                callback({convertedName: transformedNamesAndSurnames.join(' ')});
            },

            convertNames: function (names, gender) {
                var transformedNames = [],
                    that = this;
                names = names.split(' ');
                $(names).each(function () {
                    transformedNames.push(that.convertName(this, gender));
                });

                return transformedNames;
            },

            convertSurnames: function (surnames) {
                var transformedSurnames = [],
                    that = this;
                surnames = surnames.split(' ');
                $(surnames).each(function () {
                    transformedSurnames.push(that.convertSurname(this));
                });

                return transformedSurnames;
            },

            convertName: function (name, gender) {
                var namesByGender = namesData[gender],
                    namesByGenderCount = namesByGender.length,
                    convertedName;
                name = this.capitalizeFirstLetter(name);
                if (this.nameExistsInConvertedNames(name, gender)) {
                    convertedName = name;
                } else {
                    convertedName = namesByGender[Math.abs(this.hashCode(name)) % namesByGenderCount];
                }

                return convertedName;
            },

            convertSurname: function (surname) {
                var surnamesCount = surnamesData.length,
                    convertedSurname;
                surname = this.capitalizeFirstLetter(surname);
                if (this.surnameExistsInConvertedSurnames(surname)) {
                    convertedSurname = surname;
                } else {
                    convertedSurname = surnamesData[Math.abs(this.hashCode(surname)) % surnamesCount];
                }

                return convertedSurname;
            },

            nameExistsInConvertedNames: function (name, gender) {
                return $.inArray(
                    this.capitalizeFirstLetter(name.toString()),
                    namesData[gender]
                ) >= 0;
            },

            surnameExistsInConvertedSurnames: function (surname) {
                return $.inArray(
                    this.capitalizeFirstLetter(surname.toString()),
                    surnamesData
                ) >= 0;
            },

            hashCode: function (string) {
                var hash = 0, i, character;
                for (i = 0; i < string.length; i += 1) {
                    character = string.charCodeAt(i);
                    hash = ((hash << 5) - hash) + character;
                    hash = hash & hash;
                }

                return hash;
            },

            capitalizeFirstLetter: function (string) {
                return string.charAt(0).toUpperCase()
                    + string.slice(1).toLowerCase();
            },

            isParamsValid: function (params) {
                return typeof params === 'object'
                && typeof params.names === 'string'
                && (typeof params.surnames === 'string' || typeof params.surnames === 'undefined')
                && (params.gender === 'male' || params.gender === 'female');
            }
        };
    }]);
});
