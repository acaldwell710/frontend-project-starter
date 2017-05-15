
 (function() {
     function LandingCtrl(Room) {
         this.rooms = Room.all;
         this.createRoom = Room.add;
     }
 
     angular
         .module('blocBaseProject')
         .controller('LandingCtrl', ['Room', LandingCtrl]);
 })();