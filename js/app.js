var app = angular.module('Tinker',['ngRoute','ngMaterial'])
    app.config(['$routeProvider',function($routeProvider){
        $routeProvider
        .when('/', { title:"Home", controller:'HomeCtrl', templateUrl:'views/home.html' })
        .otherwise({redirectTo:'/'});
    }]);

    app.run(['$location', '$rootScope', function($location, $rootScope) {
        $rootScope.$on('$routeChangeSuccess', function (event, current) {
            $rootScope.title = current.$$route.title;
            if($location.path() =='/login' || $location.path() =='/'){
                $rootScope.showLogout = false;
            }else{
                $rootScope.showLogout = true;
            }

        });
    }]);