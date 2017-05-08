
 (function() {
     function LandingCtrl(Room) {
         this.rooms = Room.all;
     }
 
     angular
         .module('blocBaseProject')
         .controller('LandingCtrl', ['Room', LandingCtrl]);
 })();