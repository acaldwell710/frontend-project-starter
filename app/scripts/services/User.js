(function() {
  function User($firebaseArray) {
    var User = {};
    var ref = firebase.database().ref().child("users");
    var users = $firebaseArray(ref);

    User.all = users;
    
    User.add = function(userName) {
        //Use the firebase method $add here
        users.$add({ name: userName });
    } 
   
    };

    return Room;
  }
    

  angular
    .module('blocBaseProject')
    .factory('User', ['$firebaseArray', User]);
})();