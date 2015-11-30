app.factory('loginFact',['$http','$location','baseUrl',function($http, $location, baseUrl){
    return {

        authenticate : function(credentials){
            return $http.post(baseUrl+'sign-up',credentials);
        },

        setCookie : function(cname,cvalue,exdays){
            exdays = typeof exdays !== 'undefined' ? exdays : 360;
            var d = new Date();
            d.setDate(d.getDate()+(exdays*24*60*60*1000));
            var  expires = "expires="+ d.toUTCString();
            document.cookie = cname+"="+cvalue+";"+expires;

        },

        getCookie : function(cname){
            var name = cname+"=";
            var ca = document.cookie.split(';');
            for(i=0; i<ca.length; i++){
                var c = ca[i];
                while(c.charAt(0)==' ')  c = c.substring(1);
                if(c.indexOf(name)!='-1') return c.substring(name.length, c.length);
            }
            return "";
        },

        isLoggedIn : function(){
            var memberID =   this.getCookie('memberID');

            if(typeof memberID == 'undefined' || memberID==""){
                return false
            }
            return true;

        },

        getName : function(){

            if(this.isLoggedIn()){
                return this.getCookie('google_name');
            }else{
                $location.path('/home');
            }
        },

        deleteCookies : function(){
            document.cookie = "memberID=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
            document.cookie = "first_name=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
            document.cookie = "last_name=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
            document.cookie = "google_name=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
            document.cookie = "google_image_url=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
            document.cookie = "googleid=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
            document.cookie = "email=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
            document.cookie = "is_organizer=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
            document.cookie = "active=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
            return true;
        }

    }
}]);