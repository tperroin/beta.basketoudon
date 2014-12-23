/**
 * Created by Thibault on 23/12/2014.
 */
'use strict';

angular.module('angularify.semantic.modal', [])

    .directive('modal', function () {
        return {
            restrict: "E",
            replace: true,
            transclude: true,
            scope: {
                model: '=ngModel'
            },
            template: "<div class=\"ui dimmer page\" ng-class=\"{ active: model }\">" +
            "<div class=\"ui test modal transition visible\"  ng-transclude>" +
            "</div>" +
            "</div>",
            link: function (scope, element, attrs) {

            }
        }
    });