(function() {
    function HomeCtrl($scope, Room, $uibModal, Message) {
        $scope.roomList = Room.all;
        $scope.messages = {};
        
        // scope to toggle room title
        
        $scope.setCurrentRoom = function(room){
            $scope.currentRoom = room;
            $scope.messages = Message.getByRoomId(room.$id);
        };
        
        $scope.addChatRoom = function(){
            $uibModal.open({
                animation: true,
                templateUrl: '/templates/addRoom.html',
                controller: 'AddRoomCtrl'
            })
        };
    }
    
    angular
        .module('blocChat')
        .controller('HomeCtrl', ['$scope', 'Room', '$uibModal', 'Message', HomeCtrl]);
})();