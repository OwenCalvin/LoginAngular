app.controller('ctrlLogin', function($scope, $location, factServer){
    factServer.RedirectIfLogged();
    $scope.login = function(){
        factServer.Login($scope.log, $scope.password).then(function(data){
            if(data.status == 'success' || data.status == 'already') {
                factServer.RedirectToHome();
            }
            $scope.message = data.message;
        });
    }
});