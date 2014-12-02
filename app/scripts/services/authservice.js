'use strict';

/**
 * @ngdoc service
 * @name bookshubFrontendApp.authService
 * @description
 * # authService
 * Service in the bookshubFrontendApp.
 */
 
angular.module('hubAppApp')
  .service('authService', function authService($q, $http, $cookies, $rootScope) {
    // This is taken from angular-django-registration-auth
    // https://github.com/Tivix/angular-django-registration-auth/blob/master/app/scripts/services/djangoAuth.js
    var service = {
        // e.g. /api/rest-auth  (DO NOT INCLUDE ENDING SLASH)
        'API_URL': 'http://10.250.49.113:8000/api/auth',
        'use_session': false,
        'authenticated': null,
        'authPromise': null,
        'request': function(args) {
            // Let's retrieve the token from the cookie, if available
            if($cookies.token){
                $http.defaults.headers.common.Authorization = 'JWT ' + $cookies.token;
            }
            // Continue
            params = args.params || {}
            args = args || {};
            var deferred = $q.defer(),
                url = this.API_URL + args.url,
                method = args.method || "GET",
                params = params,
                data = args.data || {};
            // Fire the request, as configured.
            $http({
                url: url,
                withCredentials: this.use_session,
                method: method.toUpperCase(),
                params: params,
                data: data
            })
            .success(angular.bind(this,function(data, status, headers, config) {
                deferred.resolve(data, status);
            }))
            .error(angular.bind(this,function(data, status, headers, config) {
                console.log("error syncing with: " + url);
                // Set request status
                if(data){
                    data.status = status;
                }
                if(status == 0){
                    if(data == ""){
                        data = {};
                        data['status'] = 0;
                        data['error']['non_field_errors'] = ["Could not connect. Please try again."];
                    }
                    // or if the data is null, then there was a timeout.
                    if(data == null){
                        // Inject a non field error alerting the user
                        // that there's been a timeout error.
                        data = {};
                        data['status'] = 0;
                        data['error']['non_field_errors'] = ["Server timed out. Please try again."];
                    }
                }
                deferred.reject(data, status, headers, config);
            }));
            return deferred.promise;
        },
        'signup': function(form){
            return this.request({
                'method': "POST",
                'url': "/signup/",
                'data':{
                    'username':form.username,
                    'email':form.email,
                    'first_name': form.first_name,
                    'last_name': form.last_name,
                    'type': form.type,
                    'title': form.title,
                    'phone': form.phone,
                    'password':form.password
                }
            });
        },
        'stripe': function(plan, token){
            console.log(plan);
            console.log(token);
            return this.request({
                'method': "POST",
                'url': "/subscription/",
                'data':{
                    'stripe_token': token,
                    'plan': plan
                }
            });
        },
        'signin': function(email, password){
            var djangoAuth = this;
            return this.request({
                'method': "POST",
                'url': "/signin/",
                'data':{
                    'email':email,
                    'password':password
                }
            }).then(function(data){
                $http.defaults.headers.common.Authorization = 'JWT ' + data.token;
                $cookies.token = data.token;
                djangoAuth.authenticated = true;
                djangoAuth.user = data;
                return data;
            });
        },
        'changePassword': function(current_password, password1, password2){
            return this.request({
                'method': "PUT",
                'url': "/change_password/",
                'data':{
                    'current_password':current_password,
                    'new_password':password1,
                    'new_password_confirmation':password2
                }
            });
        },
        'forgotPassword': function(email){
            console.log(email);
            return this.request({
                'method': "POST",
                'url': "/forgot_password/",
                'data':{
                    'email':email
                }
            });
        },
        'resetPassword': function(new_password, token){
            return this.request({
                'method': "POST",
                'url': "/reset_password/",
                'data':{
                    'new_password':new_password,
                    'token':token
                }
            });
        },
        'cancelAccount': function(currrent_password){
            return this.request({
                'method': "PUT",
                'url': "/cancel_password/",
                'data':{
                    'current_password':current_password
                }
            });
        },
        'settings': function(){
            return this.request({
                'method': "GET",
                'url': "/settings/"
            });
        },
        'updateSettings': function(data){
            return this.request({
                'method': "PATCH",
                'url': "/settings/",
                'data':data
            });
        },
        'refreshToken': function(){
            return this.request({
                'method': "POST",
                'url': "/refresh_token/",
                'data':{
                    'token':$cookies.token
                }
            });
        },
        'authenticationStatus': function(restrict, force){
            // Set restrict to true to reject the promise if not logged in
            // Set to false or omit to resolve when status is known
            // Set force to true to ignore stored value and query API
            restrict = restrict || false;
            force = force || false;
            if(this.authPromise == null || force){
                this.authPromise = this.request({
                    'method': "GET",
                    'url': "/settings/"
                })
            }
            var da = this;
            var getAuthStatus = $q.defer();
            if(this.authenticated != null && !force){
                // We have a stored value which means we can pass it back right away.
                if(this.authenticated == false && restrict){
                    getAuthStatus.reject("User is not logged in.");
                }else{
                    getAuthStatus.resolve();
                }
            }else{
                // There isn't a stored value, or we're forcing a request back to
                // the API to get the authentication status.
                this.authPromise.then(function(){
                    da.authenticated = true;
                    getAuthStatus.resolve();
                },function(){
                    da.authenticated = false;
                    if(restrict){
                        getAuthStatus.reject("User is not logged in.");
                    }else{
                        getAuthStatus.resolve();
                    }
                });
            }
            return getAuthStatus.promise;
        },
        'initialize': function(url, sessions){
            this.API_URL = url;
            this.use_session = sessions;
            return this.authenticationStatus();
        }

    }
    return service;
  });
