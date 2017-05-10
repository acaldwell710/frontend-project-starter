(function() {
  function Room($firebaseArray) {
    var Room = {};
    var ref = firebase.database().ref().child("rooms");
    var rooms = $firebaseArray(ref);

    Room.all = rooms;
    
    Room.add = function(roomName) {
        //Use the firebase method $add here
        rooms.$add({ name: roomName });
    } 

    return Room;
  }

  angular
    .module('blocBaseProject')
    .factory('Room', ['$firebaseArray', Room]);
})();