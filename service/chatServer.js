// service/chatServer.js
const { WebSocketServer } = require('ws');
const uuid = require('uuid');
const connections = []



function setupChatServer(server) {
  console.log(`Server is being set up`);

  // Create a WebSocket server that attaches to the same HTTP server
  const wss = new WebSocketServer({ noServer: true });

  // Handle the protocol upgrade from HTTP to WebSocket
  server.on('upgrade', (request, socket, head) => {
    wss.handleUpgrade(request, socket, head, function done(ws) {
      wss.emit('connection', ws, request);
    });
  });
  

  wss.on('connection', (ws) => {
    console.log('A user connected to chat');
        const connection = { id: uuid.v4(), alive: true, ws: ws };
        connections.push(connection);

    ws.on('message', (data) => {
      // Parse the incoming message as JSON
      const messageObj = JSON.parse(data.toString());
      console.log(`Server received: ${messageObj.text}`);

      // Broadcast the message to all connected clients
      const broadcastMessage = JSON.stringify({ text: messageObj.text });
      wss.clients.forEach((client) => {
        if (client.readyState === WebSocket.OPEN) {
          client.send(broadcastMessage);
        }
      });
    });

    ws.on('close', () => {
      console.log('A user disconnected from chat');
    });

        // Respond to pong messages by marking the connection alive
        ws.on('pong', () => {
          connection.alive = true;
        });
  });
}

module.exports = { setupChatServer };
