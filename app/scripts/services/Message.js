(function() {
    function Message($firebaseArray, $cookies) {
     var ref = firebase.database().ref().child("messages");
     var messages = $firebaseArray(ref);
//this should return messages
     return {
         getByRoomId: function (roomId) {
         $firebaseArray(ref.orderByChild("roomId").equalTo(roomId));
      },
         send: function(newMessage, currentRoomId) {
         // Send method logic
             messages.$add ({
               username: $cookies.get('blocChatCurrentUser'),
               roomId: currentRoomId,
               content: newMessage
             });
      }
    };
  }
  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', '$cookies', Message]);
})();