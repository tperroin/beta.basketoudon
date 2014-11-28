angular.module('app').directive('selectize', function () {
    return {
        restrict: 'A',
        scope: {
            selectize: '&',
            itemadd: '&',
            options: '='
        },
        link: function (scope, element, attr) {

            var selectize = "";

            scope.$watch('options', function (newValue, oldValue) {
                if (newValue.length > 0) {
                    selectize = $('.selectize').selectize({
                        persist: false,
                        maxItems: 1,
                        valueField: 'name',
                        labelField: 'name',
                        searchField: ['name'],
                        options: scope.options
                    })[0].selectize;

                    selectize.on('item_add', function (value, $item) {
                        scope.itemadd({name: value});
                    });
                }
            });

        }

    };
});
