(function() {
    function HomeCtrl($scope, Room) {
        $scope.roomList = Room.all;     
    }
    
    angular
        .module('blocChat')
        .config('HomeCtrl', ['$scope', 'Room', HomeCtrl]);
})();