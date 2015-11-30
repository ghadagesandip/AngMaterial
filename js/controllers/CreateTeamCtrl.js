
app.controller('CreateTeamCtrl',['$scope','$location','loginFact',function($scope,$location,loginFact){

    if(!loginFact.isLoggedIn()){
        $location.path('/login');
    }

    

}]);