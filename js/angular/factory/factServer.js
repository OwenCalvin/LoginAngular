app.factory('factServer', function($rootScope, $q, $location, $http) {
    var obj = {
        IsLogged: function() {
            var p = $q.defer();
            this.GetLogin().then(function(data){
                p.resolve(data == null);
            });
            return p.promise;
        },
        GetLogin: function() {
            var p = $q.defer();
            this.Request('GET', 'getUser', null).then(function(data){
                p.resolve(data);
            });
            return p.promise;
        },
        SetLocalLogin: function() {
            var p = $q.defer();
            this.GetLogin().then(function(data){
                p.resolve(data);
                $rootScope.user = data;
                $rootScope.logged = $rootScope.user != null;
            });
            return p.promise;
        },
        Login: function(log, password) {
            var p = $q.defer();
            var obj = {
                log: log,
                password: password
            }
            var that = this;
            this.Request('POST', 'connect', obj).then(function(data) {
                p.resolve(data);
                that.SetSuccess(data);
            });
            return p.promise;
        },
        Register: function(username, email, password, passwordConfirm){
            var p = $q.defer();
            var obj = {
                username: username,
                email: email,
                password: password,
                passwordConfirm: passwordConfirm
            }
            var that = this;
            this.Request('POST', 'register', obj).then(function(data) {
                p.resolve(data);
                that.SetSuccess(data);
            });
            return p.promise;
        },
        Disconnect: function(){
            var p = $q.defer();
            var that = this;
            this.Request('GET', 'disconnect').then(function(data){
                p.resolve(data);
                that.SetSuccess(data);
            });
            return p.promise;
        },
        Request: function(method, url, data) {
            var p = $q.defer();
            var req = {
                method: method,
                url: 'php/' + url + '.php',
                data: data,
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            }
               
            $http(req).then(function(res) {
                if(res.data == 'null'){
                    res.data = null;
                }
                p.resolve(res.data);
            }, function(res) {
                p.reject('Error');
            });

            return p.promise;
        },
        SetSuccess: function(data){
            if(data.status == 'success'){
                this.SetLocalLogin();
            }
        },
        RedirectIfLogged: function() {
            if($rootScope.logged){
                this.RedirectToHome();
            }
        },
        RedirectToHome: function() {
            $location.url('/');
            $location.replace();
        }
    }   
    return obj;
});