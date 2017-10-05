app.controller('ctrlRegister', function($scope, $location, factServer, factMessage){
    factServer.RedirectIfLogged();
    $scope.register = function() {
        factServer.Register($scope.username, $scope.email, $scope.password, $scope.passwordConfirm).then(function(data){
            console.log(data);
            factMessage.SetMessage(data.message, data.status);
            if(data.status == 'success' || data.status == 'already') {
                factServer.SetLocalLogin().then(function(data){
                    factServer.RedirectToHome();
                })
            }
        });
    }
});