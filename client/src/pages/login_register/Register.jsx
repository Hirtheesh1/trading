// src/components/Register.jsx
import React, { useState } from 'react';
import './rstyle.css';
import Topbar from '../../components/topbar/Topbar';

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    country:'',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Validate form data
    if (formData.username.length < 3) {
      alert('Username must be at least 3 characters long.');
      return;
    }
    if (formData.password.length < 6) {
      alert('Password must be at least 6 characters long.');
      return;
    }

    try {
      const response = await fetch('http://localhost:3000/user/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: formData.username,
          country: formData.country,
          email: formData.email,
          password: formData.password,
        }),
      });

      const data = await response.json();
      if (response.ok) {
        alert('User registered successfully!');
        window.location.href = '/login'; 
      } else {
        alert(data.message || 'Registration failed');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while registering');
    }
  };

  return (
    <div>
      <div className='topbar'>
          <Topbar/>
      </div>
    <section className="form-container">
      <form id="signup" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
          <span className="error" id="usernameError"></span>
        </div>
        <div className='form-group'>
        <label for="country">Choose a country:</label>
        <select name="country" id="country" value={formData.country} onChange={handleChange} required>
          <option value="India">India</option>
          <option value="UAE">UAE</option>
          <option value="USA">USA</option>
          <option value="Russia">Russia</option>
        </select>
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <span className="error" id="emailError"></span>
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <span className="error" id="passwordError"></span>
        </div>
        
        <button className="Sign-btn" type="submit">Sign-Up</button>
        <button type="button" className="signup-btn" onClick={() => window.location.href = '/login'}>
          Already have an account?
        </button>
      </form>
    </section>
    </div>
  );
};

export default Register;