app.controller('ctrlDisconnect', function($scope, $location, $rootScope, factServer, factMessage) {
    factServer.Disconnect().then(function(data){
        if(data.status == 'success') {
            factServer.SetLocalLogin().then(function(data){
                factServer.RedirectToHome();
            })
        } else {
            factMessage.SetMessage(data.message, data.status);
            factServer.RedirectToHome();
        }
    });
});