var app = angular.module('Tinker',['ngRoute','ngMaterial'])
    app.value('baseUrl','http://localhost/TinkerCake/api/');
    app.config(['$routeProvider',function($routeProvider){
        $routeProvider

        .when('/',      { title:"Login", controller:'LoginCtrl', templateUrl:'views/login.html' })
        .when('/login', { title:"Login", controller:'LoginCtrl', templateUrl:'views/login.html' })
        .when('/logout', { title:"Logout", controller:'LogoutCtrl', template:'' })
        .when('/create-team', { title:"Create Team", controller:'CreateTeamCtrl', templateUrl:'views/create-team.html' })
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