// service/chatServer.js
const { Server } = require('socket.io');

function setupChatServer(server) {
    console.log(`Server is being set up` );
  const io = new Server(server, {
    // If needed, configure CORS or other options here
    cors: {
      origin: "*", // adjust to your domain/port if needed
      methods: ["GET", "POST"]
    }
  });

  io.on('connection', (socket) => {
    console.log('A user connected to chat');

    // Listen for new messages
    socket.on('new-message', (message) => {
        console.log(`Server received: ${message}` );
      // Broadcast the message to all connected clients
      io.emit('new-message', message);
    });

    socket.on('disconnect', () => {
      console.log('A user disconnected from chat');
    });
  });
}

module.exports = { setupChatServer };
