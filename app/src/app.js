angular
    .module('app',
    [
        'restangular',
        'ui.router',
        'ngFx',
        'http-auth-interceptor',
        'toaster',
        'angularify.semantic.modal'
    ]);

angular
    .module('app')
    .run(function ($rootScope, $location) {
        $rootScope.$on('$stateChangeStart',
            function (evt, toState, toParams, fromState, fromParams) {
                if ($rootScope.connectedUser) {
                    if (!$rootScope.connectedUser.isAdmin() && toState.url.indexOf("admin") == 1) {
                        $location.path("/401");
                    }
                } else {
                    if (toState.url.indexOf("admin") == 1) {
                        $location.path("/401");
                    }
                }
            });

    });


angular
    .module('app')
    .config(function (RestangularProvider, $stateProvider, $urlRouterProvider, $httpProvider) {

        var origin = window.location.origin;
        RestangularProvider.setBaseUrl(origin + '/beta.basketoudon/app/server/web/app_dev.php'); //wOOt, ugly ...but that's a demo ;)
        RestangularProvider.setRequestSuffix('.json');

        $httpProvider.interceptors.push('AuthenticationInterceptor');

        $urlRouterProvider.otherwise("/home");
        $stateProvider
            .state('home', {
                url: "/home",
                templateUrl: "src/home/partials/home.html",
                controller: 'homeController'
            })
            .state('sign_up', {
                url: "/signup",
                templateUrl: "src/home/partials/sign_up.html",
                controller: 'signUpController'
            })
            .state('confirmRegistration', {
                url: "/register/confirm/:token",
                templateUrl: "src/global/partials/confirm.html",
                controller: 'registerConfirmationController'
            })
            .state('news', {
                url: "/news",
                templateUrl: "src/news/partials/news.html",
                controller: 'newsController'
            })
            .state('events', {
                url: "/evenements",
                templateUrl: "src/timeline/partials/timeline.html",
                controller: "event.controller"
            })
            .state('admin', {
                url: "/admin",
                templateUrl: "src/admin/partials/admin.html"
            })
            .state('admin_news_home', {
                url: "/admin/news",
                templateUrl: "src/admin/partials/contents/news/admin_news_home.html",
                controller: 'admin.news.controller'
            })
            .state('admin_news_add', {
                url: "/admin/news/add",
                templateUrl: "src/admin/partials/contents/news/admin_news_add.html",
                controller: 'admin.news.controller'
            })
            .state('admin_users', {
                url: "/admin/users",
                templateUrl: "src/admin/partials/users/users.html",
                controller: 'admin.users.controller'
            })
            .state('admin_events', {
                url: "/admin/events",
                templateUrl: "src/admin/partials/contents/events/admin_events_home.html",
                controller: 'admin.events.controller'
            })
            .state('401_error', {
                url: "/401",
                templateUrl: "src/global/401.html"
            });

    });
