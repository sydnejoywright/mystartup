// import React, { useState } from 'react';
// import './login.css';

// export function Login() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSubmit = (event, action) => {
//     event.preventDefault();
//     // Handle login or account creation logic here
//     console.log(action, { email, password });
//   };

//   return (
//     <main className='login-page'>
//       <div className="title">
//         <h1>Sign In or Create an Account :)</h1>
//       </div>

//       <form onSubmit={(e) => handleSubmit(e, 'Create Account')}>
//         <div>
//           <span>@</span>
//           <input 
//             type="text" 
//             value={email} 
//             onChange={(e) => setEmail(e.target.value)} 
//             placeholder="your@email.com" 
//           />
//         </div>
//         <div>
//           <span>🔒</span>
//           <input 
//             type="password" 
//             value={password} 
//             onChange={(e) => setPassword(e.target.value)} 
//             placeholder="password" 
//           />
//         </div>
//         <button type="submit">Create Account</button>
//       </form>
//     </main>
//   );
// }

import React from 'react';
import './login.css';


import { Unauthenticated } from './unauthenticated';
import { Authenticated } from './authenticated';
import { AuthState } from './authState';

export function Login({ userName, authState, onAuthChange }) {
  console.log(authState)

  return (
    <main className='login-page'>

      <div>

        {authState  !== AuthState.Unknown && (<h1>Welcome! Sign in to get started.</h1>)}
        {authState  === AuthState.Authenticated && (
          <Authenticated userName={userName} onLogout={() => onAuthChange(userName, AuthState.Unauthenticated)} />
        )}
        {authState === AuthState.Unauthenticated && (
          <Unauthenticated
            userName={userName}
            onLogin={(loginUserName) => {
              onAuthChange(loginUserName, AuthState.Authenticated);
            }}
          />
        )}
      </div>
    </main>
  );
}
