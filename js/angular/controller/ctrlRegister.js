app.controller('ctrlRegister', function($scope, $location, factServer){
    factServer.RedirectIfLogged();
    $scope.register = function() {
        factServer.Register($scope.username, $scope.email, $scope.password, $scope.passwordConfirm).then(function(data){
            if(data.status == 'success' || data.status == 'already') {
                factServer.RedirectToHome();
            }
            $scope.message = data.message;
        });
    }
});