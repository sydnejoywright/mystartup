import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

export default function App() {
  return (
    <div className='body bg-dark text-light'>
        <header>
            <nav>
            <a href="level2_pages/book_request.html">Free Book!</a>
            <a href="level2_pages/meeting_request.html">Contact a Missionary</a>
            <a href="level2_pages/about.html">About</a>
            <a href="create_account.html">Create Profile</a>
            </nav>
        </header>

    <main>App components go here</main>

        <footer>
        <span class="text-reset">Sydne Wright</span>
        <br />
        <a href="https://github.com/sydnejoywright/mystartup.git">GitHub</a>
        </footer>
        </div>
    ); 
}