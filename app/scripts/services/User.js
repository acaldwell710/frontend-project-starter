(function() {
  function User($cookies) {
    var User = {};
    // set a username
    // get a username
    
    // Retrieve the cookie and set it to userName, in first visit it will be an empty string
//    $scope.userName = $cookies.userName || "";

    // Set the cookie for next visit of the user
    User.setName = function(newUsername){
        $cookies.put('userName', newUsername);
    };
    
    User.getName = function() {
       return $cookies.get('userName');
    };
   
    return User;
  }
 
  angular
      .module('blocBaseProject')
      .factory('User', ['$cookies', '$firebaseArray', User]);
})();