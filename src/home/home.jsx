import React from 'react';
import './home.css';
import { NavLink } from 'react-router-dom';
import Chat from '../chat/Chat'; // Ensure this path matches where Chat.jsx is located

export function Home() {
  return (
    <main>
      <div className='all'>
        <div className="text-container">
          <h1>Welcome to a short lesson in The Book of Mormon</h1>
          <nav>
            <NavLink to="/suffering" className="button">
              Why would a loving God allow so much suffering?
            </NavLink>
          </nav>
        </div>
      </div>
      
      {/* Place the chat at the bottom of the screen */}
      <div className="websocket-stuff">
        <div className="chat-container">
          <h2>Live Chat</h2>
          <Chat />
        </div>
      </div>
    </main>
  );
}
