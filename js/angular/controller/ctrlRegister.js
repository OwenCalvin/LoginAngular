app.controller('ctrlRegister', function($scope, $location, factServer){
    $scope.register = function() {
        factServer.Register($scope.username, $scope.email, $scope.password, $scope.passwordConfirm).then(function(data){
            console.log(data);
            if(data.status == 'success' || data.status == 'already') {
                $location.url('/');
                $location.replace();
            }
            $scope.message = data.message;
        });
    }
});