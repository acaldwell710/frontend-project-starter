
 (function() {
     function LandingCtrl(Room) {
         this.rooms = Room.all;
         this.createRoom = Room.add;
         
         this.selectRoom = function (room) {
             $location.path(room.link)
         }
     }
 
     angular
         .module('blocBaseProject')
         .controller('LandingCtrl', ['Room', LandingCtrl]);
 })();