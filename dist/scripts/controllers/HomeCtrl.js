(function() {
    function HomeCtrl($scope, Room, $uibModal) {
        $scope.roomList = Room.all;
        
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
        .controller('HomeCtrl', ['$scope', 'Room', '$uibModal', HomeCtrl]);
})();