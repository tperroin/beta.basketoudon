angular
    .module('app',
    [
        'restangular',
        'ui.router',
        'ngFx',
        'http-auth-interceptor'
    ]);

angular
    .module('app')
    .run(function ($rootScope, $location) {
        $rootScope.$on('$stateChangeStart',
            function (evt, toState, toParams, fromState, fromParams) {
                if($rootScope.connectedUser) {
                    if (!$rootScope.connectedUser.isAdmin() && toState.url.indexOf("admin") == 1) {
                        $location.path("/401");
                    }
                }else{
                    if(toState.url.indexOf("admin") == 1) {
                        $location.path("/401");
                    }
                }
            });

    });


angular
    .module('app')
    .config(function (RestangularProvider, $stateProvider, $urlRouterProvider, $httpProvider) {

        RestangularProvider.setBaseUrl('http://beta.basketoudon.local/server/web/app_dev.php'); //wOOt, ugly ...but that's a demo ;)
        RestangularProvider.setRequestSuffix('.json');

        $httpProvider.interceptors.push('AuthenticationInterceptor');

        $urlRouterProvider.otherwise("/home");
        $stateProvider
            .state('home', {
                url: "/home",
                templateUrl: "src/home/partials/home.html",
                controller: 'homeController'
            })
            .state('news', {
                url: "/news",
                templateUrl: "src/news/partials/news.html",
                controller: 'newsController'
            })
            .state('admin', {
                url: "/admin",
                templateUrl: "src/admin/partials/admin.html"
            })
            .state('admin_news_home', {
                url: "/admin/news",
                templateUrl: "src/admin/partials/contents/news/admin_news_home.html",
                controller: 'newsAdminController'
            })
            .state('401_error', {
                url: "/401",
                templateUrl: "src/global/401.html"
            });

    });
