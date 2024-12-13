// src/chat/Chat.jsx
import React, { useEffect, useState } from 'react';
import { io } from 'socket.io-client';

// If your frontend is served by the same server and port, just call io() without arguments.
// If you have a different port or domain, specify it like: io('http://localhost:4001')
const socket = io();

function Chat() {
  const [messages, setMessages] = useState([]);
  const [inputMsg, setInputMsg] = useState('');

  useEffect(() => {
    // Listen for incoming messages
    socket.on('new-message', (message) => {
      setMessages((prev) => [...prev, message]);
    });

    // Cleanup the listener on unmount
    return () => {
      socket.off('new-message');
    };
  }, []);

  const handleSendMessage = () => {
    if (inputMsg.trim() !== '') {
      const msgObj = {
        text: inputMsg,
        timestamp: Date.now()
      };
      socket.emit('new-message', msgObj);
      setInputMsg('');
    }
  };

  return (
    <div style={{ border: '1px solid #000', padding: '10px', maxWidth: '400px', margin: 'auto' }}>
      <h2>Live Chat</h2>
      <div style={{ maxHeight: '200px', overflowY: 'auto', border: '1px solid #ccc', marginBottom: '10px' }}>
        {messages.map((m, i) => (
          <div key={i}>{m.text}</div>
        ))}
      </div>
      <input 
        type="text" 
        value={inputMsg} 
        onChange={(e) => setInputMsg(e.target.value)} 
        onKeyDown={(e) => { if (e.key === 'Enter') handleSendMessage(); }} 
      />
      <button onClick={handleSendMessage}>Send</button>
    </div>
  );
}

export default Chat;
