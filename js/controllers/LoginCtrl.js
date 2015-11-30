app.controller('LoginCtrl',['$scope','$window','$location','loginFact',function($scope, $window, $location, loginFact){

    $scope.loginerror = false;
    $scope.ctrlerror = '';


    $window.onSignIn = function(googleUser){
        var profile = googleUser.getBasicProfile();

        var userDetails = {
            googleid : profile.getId(),
            google_name : profile.getName(),
            google_image_url : profile.getImageUrl(),
            email : profile.getEmail(),
            is_organizer : 1,
            first_name : profile.getName().split(' ')[0],
            last_name : profile.getName().split(' ')[1]
        }

        loginFact.authenticate(userDetails)
            .success(function(data, status, headers, config){
                $scope.loginerror = !data.login;
                if(data.login===false && status==200){
                    $scope.ctrlerror = data.message;
                }else{
                    // login successfull
                    $scope.ctrlerror = '';
                    loginFact.setCookie('userId',data.id,360);
                    loginFact.setCookie('first_name',data.first_name,360);
                    loginFact.setCookie('last_name',data.last_name,360);
                    loginFact.setCookie('google_name',data.google_name,360);
                    loginFact.setCookie('google_image_url',data.google_image_url,360);
                    loginFact.setCookie('google_image_url',data.google_image_url,360);
                    loginFact.setCookie('googleid',data.googleid,360);
                    loginFact.setCookie('email',data.email,360);
                    loginFact.setCookie('is_organizer',data.is_organizer,360);
                    loginFact.setCookie('active',data.active,360);
                    $location.path('/create-team');
                }
            })
            .error(function(data, status, headers, config){
                $scope.loginerror = true;
                $scope.ctrlerror = data.message
            })
    }

    $window.signOut =function(){
        var auth2 = gapi.auth2.getAuthInstance();
        auth2.signOut().then(function () {
            console.log('User signed out.');
        });
    }
}]);