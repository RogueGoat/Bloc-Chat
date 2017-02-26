(function() {
    // This controller takes into account the scope, an argument to create and manage rooms, and the modal instance so we can use angular's modal functionality
    function AddRoomCtrl($scope, Room, $uibModalInstance) {
        // global scope of the room is null
        $scope.room = null;
        // function for adding a room
        $scope.addRoom = function(newRoom){
            // if a user interacts with the model in the front-end to create a new room, and they type something into the HTML model -as long as it's not blank-
            if (newRoom !== undefined){
                //the room is made
                Room.makeRoom(newRoom);
                //the modal is closed as to not cause confusion
                $uibModalInstance.close();
            // if the user doesn't type anything in the box, the command is undefined and a new room is not made
            } else if (newRoom === undefined){
               $uibModalInstance.close(); 
            }
         }
        // this controls the button to close the modal without interacting with the text box
         $scope.nevermind = function(){
             $uibModalInstance.close();
         }
        
}
    // this is a controller file
    angular
        .module('blocChat')
        .controller('AddRoomCtrl', ['$scope', 'Room', '$uibModalInstance', AddRoomCtrl]);
})();