
 (function() {
     function LandingCtrl(Room) {
         this.rooms = Room;
     }
 
     angular
         .module('blocBaseProject')
         .controller('LandingCtrl', ['Room', LandingCtrl]);
 })();