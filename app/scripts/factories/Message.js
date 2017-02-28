(function() {
    //     This $firebaseArray service takes a Firebase reference or Firebase Query and returns a JavaScript object which contains the data at the provided Firebase reference
    // $cookies service acts to save data at a given place in the application
    function Message($firebaseArray, $cookies) {
     //This variable holds the information in the firebase database that oversees messages posted
     var ref = firebase.database().ref().child("messages");
     // This variable holds the $firebaseArray database service and references what's in it
     var messages = $firebaseArray(ref);
     
        //this should return messages by referencing the database and finding individual rooms based on their roomId
     return {
         getByRoomId: function (roomId) {
         return $firebaseArray(ref.orderByChild("roomId").equalTo(roomId));
      },
         send: function(newMessage, currentRoomId) {
         // This logic should return the information needed for the message
             messages.$add ({
               username: $cookies.get('blocChatCurrentUser'),
               roomId: currentRoomId,
               content: newMessage,
               timeSent: Date.now()
             });
          }
    };
  }
    //this file is a factory
  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', '$cookies', Message]);
})();