(function() {
    function AddRoomCtrl($scope, Room, $uibModalInstance) {
        $scope.room = null;
        $scope.addRoom = function(newRoom){
            if (newRoom !== undefined){
                Room.makeRoom(newRoom);
                $uibModalInstance.close();

            } else if (newRoom === undefined){
               $uibModalInstance.close(); 
            }
         }
        
         $scope.nevermind = function(){
             $uibModalInstance.close();
         }
        
}
    
    angular
        .module('blocChat')
        .controller('AddRoomCtrl', ['$scope', 'Room', '$uibModalInstance', AddRoomCtrl]);
})();