
 (function() {
     function LandingCtrl(Room, Message) {
         this.rooms = Room.all;
         this.currentRoom = null;
         this.currentMessages = null;
         this.createRoom = Room.add;
         this.messages = Message.all;
         this.amessages = Message.getByRoomId;
         
         
         this.selectRoom = function(room) {
             console.log(room);
             this.currentRoom = room;
             // update the current room to the room we clicked
             // get the messages for that room
             // display them on the page
         }
         this.selectMessage = function(message) {
             console.log(message);
             this.currentMessage = message;
         }
     }
 
     angular
         .module('blocBaseProject')
         .controller('LandingCtrl', ['Room', 'Message', LandingCtrl]);
 })();