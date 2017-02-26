(function() {
    // This function controls the ability to add a new use through a modal instance
    function UserCtrl($scope, $cookies, $uibModalInstance) {
        // This scope is a function made to add the user
        $scope.addUser = function(user){
            // if the user types something in the text-box when the modal pops up, it is no longer undefined. Cookies are initialized to remember the user's name so the user can interact with the rooms in the app and send messages. After the user clicks a specified button, the modal closes. Page is reloaded to show usename.
            if(user !== undefined){
                $cookies.put('blocChatCurrentUser', user);
                $uibModalInstance.close();
                window.location.reload();
            // if the user tries to submit without having a name, this alert shows. The user must submit a name to progress into the app.
            } else {
                alert("Oops! You don't have a Username yet!");
            }

        } 
    } 
        
   // this file is a controller 
    angular
        .module('blocChat')
        .controller('UserCtrl', ['$scope', '$cookies', '$uibModalInstance', UserCtrl]);
})();