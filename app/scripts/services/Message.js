(function() {
    function Message($firebaseArray) {
     var ref = firebase.database().ref().child("messages");
     var messages = $firebaseArray(ref);
//this should return messages
     return {
         getByRoomId: function (roomId) {
         $firebaseArray(ref.orderByChild("roomId").equalTo(roomId));
      },
         send: function(newMessage) {
         // Send method logic
      }
    };
  }
  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', Message]);
})();