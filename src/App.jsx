import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import Home from './Pages/Home';
import VideoPlayer from './Components/VideoPlayer/VideoPlayer';

class App extends Component {
  state = { searchQuery: 'next js' };

  handleSearch = (query) => {
    this.setState({ searchQuery: query });
  };

  render() {
    return (
      <Router>
        <Header onSearch={this.handleSearch} />
        <Routes>
          <Route 
            path="/" 
            element={<Home searchQuery={this.state.searchQuery} />} 
          />
          <Route path="/video/:id" element={<VideoPlayer />} />
        </Routes>
      </Router>
    );
  }
}

export default App;
