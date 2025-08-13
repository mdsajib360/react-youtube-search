import React, { Component } from 'react';
import Sidebar from '../Components/Sidebar';
import Feed from '../Components/Feed';

class Home extends Component {
  render() {
    return (
      <div className="flex">
        <Sidebar />
        <Feed searchQuery={this.props.searchQuery} />
      </div>
    );
  }
}

export default Home;
