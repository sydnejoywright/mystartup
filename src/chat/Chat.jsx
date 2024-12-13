import React, { useEffect, useState } from 'react';
import { io } from 'socket.io-client';

// Point this to wherever your Node/Express server is running
const socket = io('http://localhost:4001');

function Chat() {
  const [messages, setMessages] = useState([]);
  const [inputMsg, setInputMsg] = useState('');

  useEffect(() => {
    socket.on('new-message', (message) => {
      setMessages((prev) => [...prev, message]);
    });

    return () => {
      socket.off('new-message');
    };
  }, []);

  const handleSendMessage = () => {
    if (inputMsg.trim() !== '') {
      socket.emit('new-message', { text: inputMsg });
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
