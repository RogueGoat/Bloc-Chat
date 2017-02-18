(function() {
    function AddRoomCtrl($scope, Room, $uibModalInstance) {
        $scope.addRoom = function(newRoom){
            if (newRoom !== undefined){
                Room.makeRoom(newRoom);
            } else if (newRoom === undefined){
               $uibModalInstance.close(); 
            }
         }
        
         $scope.deleteRoom = function(){
             $uibModalInstance.close();
         }
        
}
    
    angular
        .module('blocChat')
        .controller('AddRoomCtrl', ['$scope', 'Room', '$uibModalInstance', AddRoomCtrl]);
})();




//        rooms.$add({}).then(function(ref){
//        var addChat = ref.key;
//        alert("Add a Chatroom?" + addChat);
//        list.$indexFor(addChat);
//    }); 