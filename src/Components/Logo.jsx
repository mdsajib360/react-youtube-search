import React, { Component } from 'react';
import logo from '../assets/youtube.png'; // adjust path if needed
import { Link } from 'react-router-dom';

class Logo extends Component {
  render() {
    return (
        <Link to="/">
      <div className="flex items-center space-x-2">
        <img src={logo} alt="YouTube Logo" className="h-6" />
          <span className="text-xl font-bold hidden sm:inline">YouTube</span>
      </div>
          </Link>
    );
  }
}

export default Logo;
