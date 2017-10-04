app.controller('ctrlHeader', function($scope, $location, $rootScope, factServer) {
    $scope.$on('$routeChangeStart', function(next, current) {
        $scope.options = [
            {
                url: 'login',
                name: 'Login'
            },
            {
                url: 'register',
                name: 'Register'
            },
            {
                url: '',
                name: 'Home'
            }
        ];
        for(var i in $scope.options){
            console.log($scope.options[i]);
            if($location.path().replace('/', '') == $scope.options[i].url){
                console.log($scope.options[i]);
                $scope.options.splice($scope.options.indexOf($scope.options[i]), 1);
                break;
            }
        }
    });
    $scope.disconnect = function(){
        factServer.Disconnect();
    }
});