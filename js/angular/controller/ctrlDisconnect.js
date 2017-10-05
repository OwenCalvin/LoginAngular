app.controller('ctrlDisconnect', function($scope, $location, $rootScope, factServer, factMessage) {
    factServer.Disconnect().then(function(data){
        factMessage.SetMessage(data.message, data.status);
        if(data.status == 'success') {
            factServer.SetLocalLogin().then(function(data){
                factServer.RedirectToHome();
            })
        } else {
            factServer.RedirectToHome();
        }
    });
});