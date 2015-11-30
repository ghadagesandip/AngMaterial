app.factory('TeamFactory',['$http','loginFact','baseUrl',function($http, loginFact, baseUrl){

    return {

        createTeam : function(teamData){
            return $http.post(baseUrl+'create-team',teamData);
        }

    }
}]);