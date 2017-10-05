app.controller('ctrlHeader', function($scope, $location, $rootScope, factServer, factMessage) {
    $scope.$on('$routeChangeStart', function(next, current) {
        if($scope.logged == null){
            factServer.SetLocalLogin().then(function(data){
                ParseOptions(data);
            });
        } else {
            ParseOptions($scope.logged);
        }
    });

    function ParseOptions(data) {
        if($scope.logged) {
            $scope.options = [
                {
                    url: 'disconnect',
                    name: 'Disconnect'
                }
            ];
        } else {
            $scope.options = [
                {
                    url: 'login',
                    name: 'Login'
                },
                {
                    url: 'register',
                    name: 'Register'
                }
            ];
        }
        for(var i in $scope.options){
            if($location.path().replace('/', '') == $scope.options[i].url){
                $scope.options.splice($scope.options.indexOf($scope.options[i]), 1);
                break;
            }
        }
    }

});