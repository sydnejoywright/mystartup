import React from 'react';
import './home.css';
import { NavLink } from 'react-router-dom';
import Chat from '../chat/Chat'; // Make sure this path matches your file structure

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
      
      {/* Integrate the Chat component below */}
      <div style={{ marginTop: '20px', textAlign: 'center' }}>
        <h2>Live Chat</h2>
        <Chat />
      </div>
    </main>
  );
}
