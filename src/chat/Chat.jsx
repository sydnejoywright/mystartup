import React, { useEffect, useState } from 'react';

function Chat() {
  const [messages, setMessages] = useState([]);
  const [inputMsg, setInputMsg] = useState('');
  const [ws, setWs] = useState(null);

  useEffect(() => {
    let port = window.location.port;
    const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
    this.socket = new WebSocket(`${protocol}://${window.location.hostname}:${port}/ws`);

    setWs(socket);

    socket.onopen = () => {
      console.log('connected to server');
    };

    socket.onclose = () => {
      console.log('disconnected from server');
    };

    socket.onerror = (error) => {
      console.log('failed to connect to server', error);
    };

    socket.onmessage = (event) => {
      // Parse the incoming message as JSON
      const message = JSON.parse(event.data);
      setMessages((prev) => [...prev, message]);
    };

    return () => {
      socket.close();
    };
  }, []);

  const handleSendMessage = () => {
    if (inputMsg.trim() !== '' && ws) {
      // Send the message as JSON
      const messageObj = { text: inputMsg };
      ws.send(JSON.stringify(messageObj));
      setInputMsg('');
    }
  };

  return (
    <>
      <div className="chat-messages">
        {messages.map((m, i) => (
          <div key={i}>{m.text}</div>
        ))}
      </div>
      <div className="chat-input-container">
        <input
          className="chat-input"
          type="text"
          value={inputMsg}
          onChange={(e) => setInputMsg(e.target.value)}
          onKeyDown={(e) => { if (e.key === 'Enter') handleSendMessage(); }}
          placeholder="Type your message..."
        />
        <button className="chat-send-button" onClick={handleSendMessage}>
          Send
        </button>
      </div>
    </>
  );
}

export default Chat;
