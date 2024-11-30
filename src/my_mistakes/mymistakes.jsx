import React from 'react';
import { NavLink } from 'react-router-dom';
import './mymistakes.css';

export function My_Mistakes() {
  return (
    <main className='mymistakes-main'>      
      <p>
        We all make mistakes in life. It's a natural part of our mortal experience.
        Our mistakes leave us with feelings of guilt and shame that are impossible to erase
        without the help of Jesus Christ.
      </p>
      <p>
        In the Book of Mormon, you can read the story of Alma, a young man who made a lot of mistakes,
        but who was able to change his life and find relief through the help of Jesus Christ. 
      </p>
      
      <h3>Follow along as Alma tells his story to his son Helaman:</h3>
      <nav>
        <NavLink to="suffering_almasstory.html">Continue</NavLink>
      </nav>

      <div>
        <p className="create_account">
          If you want to pick up where you left off, or save your progress for next time, please
        </p>
        <NavLink to="/create_account.html">create an account</NavLink>
      </div>
    </main>
  );
}
