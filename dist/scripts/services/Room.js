(function() {
  function Room($firebaseArray) {
    var ref = firebase.database().ref().child('rooms');
    var rooms = $firebaseArray(ref);
      
    return {
        all: rooms,
        makeRoom: function(newRoom){
            return rooms.$add({
                name: newRoom,
                createdAt: (new Date()).getTime()
            });
        }
    };
  }

  angular
    .module('blocChat')
    .factory('Room', ['$firebaseArray', Room]);
})();