import React from 'react';
import './create_account.css'

export function Login() {
  return (
    <main>
      <div className="tit">
        <h1>Sign In or Create an Account :)</h1>
      </div>

      <form method="get" action="play.html">
        <div>
          <span>@</span>
          <input type="text" placeholder="your@email.com" />
        </div>
        <div>
          <span>🔒</span>
          <input type="password" placeholder="password" />
        </div>
        <button type="submit">Login</button>
        <button type="submit">Create</button>
      </form>
    </main>
  );
}