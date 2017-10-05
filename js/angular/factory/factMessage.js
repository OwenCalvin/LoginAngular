app.factory('factMessage', function($rootScope,$timeout) {
    var obj = {
        SetMessage: function(message, status) {
            $rootScope.classMessage = status == 'success' ? 'successMessage' : 'errorMessage';
            $rootScope.message = message;
            $rootScope.displayMessage = true;
            $timeout(function(){
                $rootScope.displayMessage = false;
            }, 1000);
        }
    }   
    return obj;
});