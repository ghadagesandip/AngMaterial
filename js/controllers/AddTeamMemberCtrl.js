
app.controller('AddTeamMemberCtrl',['$scope','$location','loginFact','TeamFactory',function($scope,$location,loginFact,TeamFactory){

    $scope.submitted = false;

    if(!loginFact.isLoggedIn()){
        $location.path('/login');
    }

    $scope.setName = loginFact.getCookie('google_name');

    $scope.createTeam = function(){
        $scope.submitted = true;

        if(!$scope.createTeamFrm.$valid){
            return false;
        }
        $scope.team = {};
        $scope.team.member_id = loginFact.getCookie('memberID');
        $scope.team.name = $scope.setName;


        TeamFactory.createTeam($scope.team)
            .success(function(result){
                $scope.todos = {}
                $scope.status = 'team saved';
                $location.path('/add-team-members');
            })
            .error(function(){

            });
    }


}]);