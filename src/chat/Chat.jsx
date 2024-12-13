import React, { useEffect, useState } from 'react';
import { io } from 'socket.io-client';

// Adjust the URL if needed to match your backend server address
const socket = io('http://localhost:4001');
socket.on('connect', () => {
    console.log('connected to server');
    });

    socket.on('connect_error', (error) => {
        console.log('failed to server', error);
        });



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
            <button className="chat-send-button" onClick={handleSendMessage}>Send
            </button>

      </div>
    </>
  );
}

export default Chat;
