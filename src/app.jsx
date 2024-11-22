import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { About } from './about/about';
import { Alma_Continued } from './alma_continued/suffering_alma_continued';
import { Suffering_Almas_Story } from './almas_story/suffering_almas_story';
import { Book_Request } from './book_request/book_request';
import { Login } from './login/login';
import { Meeting_Request } from './meeting_request/meeting_request';
import { My_Mistakes } from './my_mistakes/mymistakes';
import { Suffering } from './suffering/suffering';
import { Home } from './suffering/suffering';

export default function App() {
  return (
    <BrowserRouter>
        <div className='body bg-dark text-light'>
            <header>
                <nav>
                <NavLink className='nav-link' to='login'>Home</NavLink>
                <NavLink className='nav-link' to='book_request'>Free Book!</NavLink>
                <NavLink className='nav-link' to='meeting_request'>Meet a Missionary</NavLink>
                <NavLink className='nav-link' to='about'>About</NavLink>
                <NavLink className='nav-link' to='login'>Create Profile</NavLink>
                </nav>
            </header>

        <main>App components go here</main>


        <Routes>
            <Route path='/login' element={<Home />} />
            <Route path='/book_request' element={<Book_Request />} />
            <Route path='/meeting_request' element={<Meeting_Request />} />
            <Route path='/about' element={<About />} />
            <Route path='/create_profile' element={<Login />} />
            <Route path='*' element={<NotFound />} />
        </Routes>

            <footer>
            <span class="text-reset">Sydne Wright</span>
            <br />
            <a href="https://github.com/sydnejoywright/mystartup.git">GitHub</a>
            </footer>
            </div>
        </BrowserRouter>
    ); 
}