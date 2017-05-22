(function() {
  function Message($firebaseArray) {
    var Message = {};
    var ref = firebase.database().ref().child("messages");
    var messages = $firebaseArray(ref);
      
    Message.all = messages;

    Message.add = function(roomId) {
        messages.$add({ message: "roomId" });
    }

    Message.getByRoomId = function(roomId, messages) {
        var newRef = ref.orderByChild("roomId").equalTo(roomId);
        return $firebaseArray(newRef);
    };
      
    //Message.send = function(newMessage) {
        // Send method logic
    //};
    
    return Message;
  }

  angular
    .module('blocBaseProject')
    .factory('Message', ['$firebaseArray', Message]);
})();