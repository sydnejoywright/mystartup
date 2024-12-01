import React, { useState } from 'react';
import './book_request.css'

export function Book_Request() {
  // State to hold form input values
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent the form from submitting normally

    // Prepare data to send to the backend
    const formData = {
      name,
      email,
      address,
      phone,
    };

    try {
      // Send the form data to the backend using fetch
      const response = await fetch('/api/book_request', {
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
    <main className="book-main">
      <div className="book-content">
        <h1>Request your free copy of The Book of Mormon</h1>
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

          <label htmlFor="email">Email Address:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label htmlFor="address">Billing Address:</label>
          <textarea
            id="address"
            name="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            rows="4"
            required
          ></textarea>

          <label htmlFor="phone">Phone Number:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />

          <button type="submit">Submit Request</button>
        </form>
      </div>
    </main>
  );
}
