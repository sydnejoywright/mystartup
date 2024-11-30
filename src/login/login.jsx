import React, { useState } from 'react';
import './login.css';

export function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event, action) => {
    event.preventDefault();
    // Handle login or account creation logic here
    console.log(action, { email, password });
  };

  return (
    <main className='login-page'>
      <div className="title">
        <h1>Sign In or Create an Account :)</h1>
      </div>

      <form onSubmit={(e) => handleSubmit(e, 'Create Account')}>
        <div>
          <span>@</span>
          <input 
            type="text" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            placeholder="your@email.com" 
          />
        </div>
        <div>
          <span>🔒</span>
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            placeholder="password" 
          />
        </div>
        <button type="submit">Create Account</button>
      </form>
    </main>
  );
}
