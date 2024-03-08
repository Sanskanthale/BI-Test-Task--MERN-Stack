const http = require('http');
const express = require('express');
const socketIo = require('socket.io');
const cors = require('cors');
const { log, error } = require('console');
const app = express();
const server = http.createServer(app);
app.use(cors());
const io = socketIo(server, {
  cors: {
    origin: "http://localhost:3000"
  }
});

let activeChatUsers = [];
let activeVideoCallUsers = [];

// Chat namespace
const chatNamespace = io.of('/chat');
chatNamespace.on("connection", (socket) => {
  // Adds New User to chat
  socket.on('new-user-add', (newUserId) => {
    if (!newUserId || newUserId != undefined) {
      if (!activeChatUsers.some((user) => user.userId === newUserId)) {
       
        activeChatUsers.push({
          userId: newUserId,
          socketId: socket.id
          
        })

      }
    }
    console.log("Connected chat users", activeChatUsers);
    chatNamespace.emit('get-users', activeChatUsers);
  });

  // User Disconnected from chat
  socket.on("disconnect", () => {
    activeChatUsers = activeChatUsers.filter((user) => user.socketId !== socket.id);
    console.log("User Disconnected from chat " + socket.id);
    chatNamespace.emit('get-users', activeChatUsers);
  });

  // Send Message in chat
  socket.on("send-message", (data) => {
    const { reciverId } = data;
    const user = activeChatUsers.find((user) => user.userId == reciverId);
    if (user) {
      chatNamespace.to(user.socketId).emit("recive-message", data);
    }
    
  });

  // Set Typing Status in chat
  socket.on("set-typing", (data) => {
    const user = activeChatUsers.find((user) => user.userId == data.userId);
    console.log("this is the receiver", user);
    console.log("these are the active chat users", activeChatUsers);
    if (user && user.socketId !== socket.id) {
      chatNamespace.to(user.socketId).emit("set-typing-status", data.status);
    }
  });
});

server.listen(8800, () => {
  console.log('Server is running on port 8800');
});
