(function() {
  function Message($firebaseArray) {
    var Message = {};
    var ref = firebase.database().ref().child("messages");
    var messages = $firebaseArray(ref);
      
      Message.getByRoomId = function(roomId, messages) {
            
          ref.orderByChild("roomId").equalTo(roomId);
            return messages;
      };
      
      Message.all = messages;
      
      Message.add = function(roomId) {
       messages.$add({ message: "roomID" });
      }
        // use orderByChild and equalTo to filter the message
        // hint: use $firebaseArray to convert the data to an array
        // Filter the messages by their room ID.

    return Message;
  }

  angular
    .module('blocBaseProject')
    .factory('Message', ['$firebaseArray', Message]);
})();