(function() {
    // This function takes several arguments to control different aspects of the homepage instead of just one or two main things
    function HomeCtrl($scope, Room, $uibModal, Message, $cookies) {
       // this controls how many rooms can be listed through the scope
        $scope.roomList = Room.all;
        // this starts messages off as an empty list to be filled with information
        $scope.messages = [];
        // this saves the current user's name that is typed in through the front-end using UserCtrl - we initialize cookies here in order for the user to interact with the app and remain "logged in"
        $scope.currentUser = $cookies.get('blocChatCurrentUser');
        // This starts the current room as an empty object to hold things like user information and messages as we add it into other functions
        $scope.currentRoom = {};
        
        
        // scope to toggle room title
        $scope.setCurrentRoom = function(room){
            //The scope identifies the current room when a user interacts with a call to this function
            $scope.currentRoom = room;
            // This scope calls on the Message factory and asks the getbyroomid method - this is supposed to connect messages to a specific room
            $scope.messages = Message.getByRoomId(room.$id);
        };
        
        // scope is a function to add a chat room
        $scope.addChatRoom = function(){
            // this asks the modal to open when specified in HTML
            $uibModal.open({
                // this adds in animation, connects the template to the modal instance and the controller to this function so the modal functions properly
                animation: true,
                templateUrl: '/templates/addRoom.html',
                controller: 'AddRoomCtrl'
            })
        };
        
        // this scope is a function to send messages
        $scope.sendMessage = function(message){
            //We ask the Message factory to use the send method, we give parameters of the new message itself and what room that message is in
            Message.send($scope.newMessage, $scope.currentRoom.$id);
           // new message is set to nothing initially
            $scope.newMessage = null;
        }
    }
    // this file is a controller
    angular
        .module('blocChat')
        .controller('HomeCtrl', ['$scope', 'Room', '$uibModal', 'Message', '$cookies', HomeCtrl]);
})();