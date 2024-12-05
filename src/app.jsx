import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { About } from './about/about';
import { Home } from './home/home'
import { Book_Request} from './book_request/book_request'
import { Meeting_Request} from './meeting_request/meeting_request'
import { Login } from './login/login';
import { Suffering } from './suffering/suffering';
import { My_Mistakes } from './my_mistakes/mymistakes';


function App() {
  return (
    <BrowserRouter>
        <header>
            <nav>
            <NavLink className='nav-link' to=''>Home</NavLink>
            <NavLink className='nav-link' to='book_request'>Free Book!</NavLink>
            <NavLink className='nav-link' to='meeting_request'>Meet a Missionary</NavLink>
            <NavLink className='nav-link' to='about'>About</NavLink>
            <NavLink className='nav-link' to='create_account'>Profile</NavLink>
            </nav>
        </header>


        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/create_account' element={<Login />} />
            <Route path='/book_request' element={<Book_Request />} />
            <Route path='/meeting_request' element={<Meeting_Request />} />
            <Route path='/suffering' element={<Suffering />} />
            <Route path='/mymistakes' element={<My_Mistakes />} />
            {/* <Route path='*' element={<NotFound />} /> */}
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