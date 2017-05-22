
 (function() {
     function LandingCtrl(Room, Message) {
         this.rooms = Room.all;
         this.currentRoom = null;
         this.createRoom = Room.add;
         this.messages = null;
         this.createUser = User.add;
         
         
         
         this.selectRoom = function(room) {
             this.currentRoom = room;
             this.messages = Message.getByRoomId(room.$id);
             
             
        
          
         }
     }
 
     angular
         .module('blocBaseProject')
         .controller('LandingCtrl', ['$cookies', 'Room', 'Message', 'User', LandingCtrl]);
 })();