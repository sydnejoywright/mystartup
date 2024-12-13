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

import { Navigate } from 'react-router-dom';
// import { AuthState } from './login/authState';

function ProtectedRoute({ authState, children }) {
  if (authState !== AuthState.Authenticated) {
    // If the user is not authenticated, redirect them to the login page
    return <Navigate to="/" />;
  }
  // Otherwise, render the protected component
  return children;
}


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
            <NavLink className='nav-link' to='home'>Home</NavLink>
            <NavLink className='nav-link' to='book_request'>Free Book!</NavLink>
            <NavLink className='nav-link' to='meeting_request'>Meet a Missionary</NavLink>
            <NavLink className='nav-link' to='about'>About</NavLink>
            <NavLink className='nav-link' to=''>Profile</NavLink>
            </nav>
        </header>


        <Routes>
          <Route path='/home' element={<ProtectedRoute authState={authState}><Home /></ProtectedRoute>} />
          <Route path='/about' element={<ProtectedRoute authState={authState}><About /></ProtectedRoute>} />

          {/* Public route for login */}
          <Route path='/' element={
              <Login
                  userName={userName}
                  authState={authState}
                  onAuthChange={(userName, authState) => {
                      setAuthState(authState);
                      setUserName(userName);
                  }}
              />
          }/>

          {/* Protected routes */}
          <Route 
            path='/book_request' 
            element={
              <ProtectedRoute authState={authState}>
                <Book_Request />
              </ProtectedRoute>
            }
          />

          <Route 
            path='/meeting_request' 
            element={
              <ProtectedRoute authState={authState}>
                <Meeting_Request />
              </ProtectedRoute>
            }
          />

          <Route 
            path='/suffering' 
            element={
              <ProtectedRoute authState={authState}>
                <Suffering />
              </ProtectedRoute>
            }
          />

          <Route 
            path='/mymistakes' 
            element={
              <ProtectedRoute authState={authState}>
                <My_Mistakes />
              </ProtectedRoute>
            }
          />
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