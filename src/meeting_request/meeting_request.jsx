import React from 'react';
import './meeting_request.css'

export function Meeting_Request() {
  return (
    <main className='meeting-main'>
      <h1>Meet with the Missionaries</h1>
      <h3>Fill out this form and someone will be in touch with you soon!</h3>

      <form action="/submit-contact" method="POST">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="phone">Phone Number:</label>
        <input type="tel" id="phone" name="phone" required />

        <label htmlFor="email">Email Address:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="country">Country:</label>
        <select id="country" name="country" required>
          <option value="">Select your country</option>
          <option value="USA">USA</option>
          <option value="Canada">Canada</option>
          <option value="UK">United Kingdom</option>
          <option value="Australia">Australia</option>
        </select>

        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" rows="4" required></textarea>

        <button type="submit">Submit</button>
      </form>
    </main>
  );
}
