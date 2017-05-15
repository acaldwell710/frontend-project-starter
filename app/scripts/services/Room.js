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
    
    
  //  ---- testing --- //
    
    // mouse over active link
    // on click enter the chat room
    // once entered show the room & message area
    // list other rooms on side / create room area
    

  angular
    .module('blocBaseProject')
    .factory('Room', ['$firebaseArray', Room]);
})();