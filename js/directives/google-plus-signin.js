angular.module('directive.g+signin', []).
    directive('googlePlusSignin', function(){
        return{
            restrict : "E",
            template : "<div></div>",
            replace: true,
            link:function(scope, element, attrs){
                attrs.$set('class', 'g-signin2');
                attrs.$set('data-clientid', attrs.clientid + '.apps.googleusercontent.com');

                var defaults = {
                    onsuccess : signinCallback,
                    requestvisibleactions: 'http://schemas.google.com/AddActivity',
                    scope: 'https://www.googleapis.com/auth/plus.login https://www.googleapis.com/auth/userinfo.email',
                };

                // Provide default values if not explicitly set
                angular.forEach(Object.getOwnPropertyNames(defaults), function(propName) {
                    if (!attrs.hasOwnProperty('data-' + propName)) {
                        attrs.$set('data-' + propName, defaults[propName]);
                    }
                });

                // Asynchronously load the G+ SDK.
                (function() {
                    var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true;
                    po.src = 'https://apis.google.com/js/platform.js';
                    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);
                })();

            }
        }
    })
