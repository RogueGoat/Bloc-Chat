(function() {
    // this function takes the firebaseArray service as its parameter and holds the information to the rooms in our database
  function Room($firebaseArray) {
      // this variable simplifies getting information from the database, so when we call on it we don't have to type out all these methods
    var ref = firebase.database().ref().child('rooms');
      // this variable uses the firebasearray service and the argument references the information that makes the room
    var rooms = $firebaseArray(ref);
      // we are returning the rooms to the front end, we use the makeRoom function to add a new room when called on - the new room holds the same details as the rooms that are already created and is returned once created
    return {
        all: rooms,
        makeRoom: function(newRoom){
            // this uses the add service to give the room a name and a date, we can call on these identifiers in angular directives
            return rooms.$add({
                name: newRoom,
                createdAt: (new Date()).getTime()
            });
        }
    };
  }
// this is a factory file
  angular
    .module('blocChat')
    .factory('Room', ['$firebaseArray', Room]);
})();