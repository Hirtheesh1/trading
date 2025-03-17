import React from 'react';
import './stylesheet.css';
import Profile from '../profile/Profile';
import Topbar from '../../components/topbar/Topbar';

const Login = () => {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const username = event.target.username.value;
    const password = event.target.password.value;

    // Clear previous error messages
    document.getElementById('usernameError').textContent = '';
    document.getElementById('passwordError').textContent = '';

    let valid = true;

    // Client-side validation
    if (username.length < 3) {
      document.getElementById('usernameError').textContent = 'Username must be at least 3 characters long.';
      valid = false;
    }
    if (password.length < 6) {
      document.getElementById('passwordError').textContent = 'Password must be at least 6 characters long.';
      valid = false;
    }

    if (valid) {
      try {
        const response = await fetch('http://localhost:3000/user/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ username, password }),
        });

        const data = await response.json();

        if (!response.ok) {
          // Handle server-side validation errors
          if (data.message) {
            alert(data.message); // Display server error message
          } else {
            throw new Error('Login failed');
          }
        } else {
          // Login successful
          console.log('Login successful:', data);
          alert('Login successful!');

          // Store the token in localStorage or sessionStorage
          localStorage.setItem('token', data.token);

          // Redirect to a protected route (e.g., dashboard)
          <Profile/>
        }
      } catch (error) {
        console.error('Error during login:', error);
        alert('Login failed. Please check your credentials and try again.');
      }
    }
  };

  return (
      <div className='body'>
        <div className='topbar'><Topbar/></div>
      <div className="login-container">
        <form id="loginForm" onSubmit={handleSubmit}>
          <h2>Login</h2>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" name="username" required />
            <span className="error" id="usernameError"></span>
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" required />
            <span className="error" id="passwordError"></span>
          </div>
          <button type="submit">Login</button>
          <button type="button" className="signup-btn" onClick={() => (window.location.href = '/register')}>
            Don't have an account?
          </button>
        </form>
      </div>
      </div>
  );
};

export default Login;