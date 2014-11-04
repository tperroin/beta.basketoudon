function ApiService () {
    var ApiService = {};
    ApiService.getRoute = function(routeName) {
        return Routing.generate(routeName, {}, false).slice(1);
    };
    return ApiService;
}
angular
    .module('app')
    .factory('ApiService', ApiService);