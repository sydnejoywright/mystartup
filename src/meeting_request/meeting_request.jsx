import React, { useState } from 'react';
import './meeting_request.css';

export function Meeting_Request() {
  // State to hold form input values
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [country, setCountry] = useState('');
  const [message, setMessage] = useState('');

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission

    // Prepare data to send to the backend
    const formData = {
      name,
      phone,
      email,
      country,
      message,
    };

    try {
      // Send the form data to the backend using fetch
      const response = await fetch('/api/meeting_request', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData), // Send form data as JSON
      });

      // Check if the request was successful
      if (response.ok) {
        const data = await response.json();
        alert(data.message); // Show success message
      } else {
        alert('Something went wrong. Please try again later.');
      }
    } catch (error) {
      console.error('Error submitting the form:', error);
      alert('An error occurred while submitting the form.');
    }
  };

  return (
    <main className="meeting-main">
      <h1>Meet with the Missionaries</h1>
      <h3>Fill out this form and someone will be in touch with you soon!</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label htmlFor="phone">Phone Number:</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />

        <label htmlFor="email">Email Address:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label htmlFor="country">Country:</label>
        <select
          id="country"
          name="country"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          required
        >
          <option value="">Select your country</option>
          <option value="USA">USA</option>
          <option value="Canada">Canada</option>
          <option value="UK">United Kingdom</option>
          <option value="Australia">Australia</option>
        </select>

        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows="4"
          required
        ></textarea>

        <button type="submit">Submit</button>
      </form>
    </main>
  );
}
