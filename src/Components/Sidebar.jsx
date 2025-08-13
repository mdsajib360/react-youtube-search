import React, { Component } from 'react';

class Sidebar extends Component {
  render() {
    return (
      <aside className="w-56 p-4 bg-gray-100 h-screen sticky top-14">
        <div className="space-y-4">
          <p>🏠 Home</p>
          <p>🔥 Trending</p>
          <p>📺 Subscriptions</p>
          <p>📚 Library</p>
        </div>
      </aside>
    );
  }
}

export default Sidebar;
