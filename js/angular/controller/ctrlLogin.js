app.controller('ctrlLogin', function($scope, $location, factServer, factMessage){
    factServer.RedirectIfLogged();
    $scope.login = function(){
        factServer.Login($scope.log, $scope.password).then(function(data){
            factMessage.SetMessage(data.message, data.status);
            if(data.status == 'success' || data.status == 'already') {
                factServer.SetLocalLogin().then(function(data){
                    factServer.RedirectToHome();
                })
            }
        });
    }
});