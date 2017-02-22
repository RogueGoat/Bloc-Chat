(function() {
    function AddRoomCtrl($scope, User, $uibModalInstance) {
        $scope.addUser = function(newUser){
            if (newUser !== undefined){
                Room.makeUser(newUser);
                $uibModalInstance.close();
            } 
         } 
        
}
    
    angular
        .module('blocChat')
        .controller('UserCtrl', ['$scope', 'User', '$uibModalInstance', UserCtrl]);
})();