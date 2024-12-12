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
import { AuthState } from './login/authState';


function App() {
  // the website is broken because userName and authState are not being properly set. they 
  // can be manually set at a few different locations:
  // in path routing, by replacing {userName} and {authState} with strings of some sort
  // ex. authState='unauthenticated'
  // p.s. the only problem is authState getting set. if userName never gets set the website actually
  // doesn't break because it's never even accessed

  // there also seem to be issues in comparing authState with AuthState.Authenticated
  // and AuthState.Unauthenticated because even when they are set manually,
  // e.g. authState='unauthenticated' the correct input field boxes will not be displayed unless
  // line 61 is changed to read {authState === 'unauthenticated' && .....
  const [userName, setUserName] = React.useState(localStorage.getItem('userName') || '');
  const currentAuthState = userName ? AuthState.Authenticated : AuthState.Unauthenticated;
  const [authState, setAuthState] = React.useState(currentAuthState);

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
            {/* <Route path='/create_account' element={<Login />} /> */}
            <Route path='/create_account' element={<Login
                userName={userName}
                authState={authState}
                onAuthChange={(userName, authState) => {
                  setAuthState(authState);
                  setUserName(userName);
                }}
              />}/>
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