
 (function() {
     function LandingCtrl(Room, Message, User) {
         this.rooms = Room.all;
         this.currentRoom = null;
         this.createRoom = Room.add;
         this.messages = null;
         this.createUser = User.setName;
         this.sendMessage = Message.send;
         this.username = User.getName();
         
         this.selectRoom = function(room) {
             this.currentRoom = room;
             this.messages = Message.getByRoomId(room.$id);
             
         }
     }
 
     angular
         .module('blocBaseProject')
         .controller('LandingCtrl', ['Room', 'Message', 'User', LandingCtrl]);
 })();