import React from 'react';
import './suffering.css'
import { NavLink } from 'react-router-dom';

export function Suffering() {
  return (
    <main className='suffering-main'>
      <p className="intro">
        You are a child of a loving Heavenly Father,
        but the suffering you see and experience in life <br />
        may sometimes cause you to question if He is really there-
      </p>
      <h1 className="header1">-or if He really cares.</h1>
      <br />
      <h3>The Book of Mormon answers questions about</h3>
      <h1 className="header2">3 Types of Suffering</h1>

      <h3>
        As you study each module, ponder how the principles could be applied to
        your situation.
      </h3>
      <br />
      <br />
      <nav>
        <NavLink to="/mymistakes" className="button">
          Module 1: Suffering caused by my mistakes
        </NavLink>
        <br />
        <br />
      </nav>
    </main>
  );
}
