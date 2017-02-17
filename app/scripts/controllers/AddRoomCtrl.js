(function() {
    function AddRoomCtrl($scope, Room, $uibModalInstance) {
        $scope.addRoom = function(){
            
        };
 
        
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