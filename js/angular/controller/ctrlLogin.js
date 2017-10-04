app.controller('ctrlLogin', function($scope, $location, factServer){
    $scope.login = function(){
        factServer.Login($scope.log, $scope.password).then(function(data){
            if(data.status == 'success' || data.status == 'already') {
                $location.url('/');
                $location.replace();
            }
            $scope.message = data.message;
        });
    }
});