(function() {
    function HomeCtrl($scope, Room, $uibModal, Message, $cookies) {
        $scope.roomList = Room.all;
        $scope.messages = [];
        $scope.currentUser = $cookies.get('blocChatCurrentUser');
        $scope.currentRoom = {};
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
        
        $scope.sendMessage = function(message){
            //sending message function
            Message.send($scope.newMessage, $scope.currentRoom.$id);
            $scope.newMessage = null;
        }
    }
    
    angular
        .module('blocChat')
        .controller('HomeCtrl', ['$scope', 'Room', '$uibModal', 'Message', '$cookies', HomeCtrl]);
})();