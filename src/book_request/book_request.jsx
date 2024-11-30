import React from 'react';
import './book_request.css'

export function Book_Request() {
  return (

    <main className= 'book-main'>
      <div className = 'book-content'>
            <h1>Request your free copy of The Book of Mormon</h1>
            <form action="/submit-request" method="POST">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" required />

              <label htmlFor="email">Email Address:</label>
              <input type="email" id="email" name="email" required />

              <label htmlFor="address">Billing Address:</label>
              <textarea id="address" name="address" rows="4" required></textarea>

              <label htmlFor="phone">Phone Number:</label>
              <input type="tel" id="phone" name="phone" />

              <button type="submit">Submit Request</button>
            </form>
          </div>
    </main>
  );
}