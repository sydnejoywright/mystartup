import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { About } from './about/about';
import { Home } from './home/home'

// import { Book_Request } from './book_request/book_request';
// import { Login } from './login/login';
// import { Meeting_Request } from './meeting_request/meeting_request';
// import { Home } from './home/home';

function App() {
  return (
    <BrowserRouter>
        <header>
            <nav>
            <NavLink className='nav-link' to=''>Home</NavLink>
            <NavLink className='nav-link' to='book_request'>Free Book!</NavLink>
            <NavLink className='nav-link' to='meeting_request'>Meet a Missionary</NavLink>
            <NavLink className='nav-link' to='about'>About</NavLink>
            <NavLink className='nav-link' to='login'>Create Profile</NavLink>
            </nav>
        </header>


        <Routes>
            <Route path='/' element={<Home />} />
            {/* <Route path='/book_request' element={<Book_Request />} />
            <Route path='/meeting_request' element={<Meeting_Request />} />
            <Route path='/about' element={<About />} />
            <Route path='/login' element={<Login />} />
            <Route path='*' element={<NotFound />} /> */}
        </Routes>

        <footer>
            <span className="text-reset">Sydne Wright</span>
            <br />
            <a href="https://github.com/sydnejoywright/mystartup.git">GitHub</a>
        </footer>
    </BrowserRouter>
    ); 
}

export default App