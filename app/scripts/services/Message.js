(function() {
    function Message($firebaseArray) {
     var ref = firebase.database().ref().child("messages");
     var messages = $firebaseArray(ref);
//this should retrun messages
     return {
         getByRoomId: function (roomId) {
         $firebaseArray(ref.orderByChild("roomId").equalTo(roomId));
      }
    };
  }
  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', Message]);
})();