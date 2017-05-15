
 (function() {
     function LandingCtrl(Room) {
         this.rooms = Room.all;
         this.rooms.add = Room.add;
     }
 
     angular
         .module('blocBaseProject')
         .controller('LandingCtrl', ['Room', LandingCtrl]);
 })();