
 (function() {
     function LandingCtrl(Room, Message) {
         this.rooms = Room.all;
         this.currentRoom = null;
         this.createRoom = Room.add;
         this.messages = null;
         
         
         
         this.selectRoom = function(room) {
             console.log(room);
             this.currentRoom = room;
             this.messages = Message.getByRoomId(room.$id);
             // update the current room to the room we clicked
             // get the messages for that room
             // display them on the page
         }
         //this.selectMessage = function(message) {
         //    console.log(message);
         //    this.currentMessage = message;
         //}
     }
 
     angular
         .module('blocBaseProject')
         .controller('LandingCtrl', ['Room', 'Message', LandingCtrl]);
 })();