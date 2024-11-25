import React, { useEffect, useState } from 'react';
import './home.css';
import { NavLink } from 'react-router-dom';
// import { Alma_Continued } from './alma_continued/suffering_alma_continued';
// import { Suffering_Almas_Story } from './almas_story/suffering_almas_story';
// import { My_Mistakes } from './my_mistakes/mymistakes';
// import { Suffering } from './suffering/suffering';

export function Home() {
  return (
    <main>
    <body>
      <div className="text-container">
          <h1>Welcome to a short lesson in The Book of Mormon</h1>
          <nav>
            <NavLink to="/level2_pages/suffering" className="button">
              Why would a loving God allow so much suffering?
            </NavLink>
          </nav>
        </div>
      
        <p className="create_account">
            If you want to pick up where you left off, or save your progress for next time, please * {'    '}
                    <NavLink to="/create_account">Create an Account</NavLink>
        </p>
      </body>
    </main>
  );
}
