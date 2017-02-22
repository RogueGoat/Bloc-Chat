(function() {
    function UserCtrl($scope, $cookies, $uibModalInstance) {
        $scope.addUser = function(user){
            if(user !== undefined){
                $cookies.put('blocChatCurrentUser', user);
                $uibModalInstance.close();

            } else {
                alert("Oops! You don't have a Username yet!");
            }

        } 
    } 
        
    
    angular
        .module('blocChat')
        .controller('UserCtrl', ['$scope', '$cookies', '$uibModalInstance', UserCtrl]);
})();