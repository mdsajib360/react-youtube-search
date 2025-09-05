import { Component } from "react";
import Sidebar from "../../Components/SideBar/Sidebar";
import Feed from "../Components/Feed";

class Home extends Component {
  render() {
    return (
      <div className="flex flex-col md:flex-row min-h-screen">
        {/* Sidebar for Desktop */}
        <div className="hidden md:block w-64 bg-gray-900">
          <Sidebar />
        </div>

        {/* Feed */}
        <div className="flex-1 p-4">
          <Feed
            videos={this.props.videos}
            fetchVideos={this.props.fetchVideos}
            searchQuery={this.props.searchQuery}
             updateQuery={this.props.updateQuery}
          />
        </div>

        {/* Bottom Menu for Mobile */}
        <div className="fixed bottom-0 left-0 right-0 md:hidden bg-gray-900 text-white flex justify-around p-2 shadow-inner">
          <button className="flex flex-col items-center">
            <span>🏠</span>
            <small>Home</small>
          </button>
          <button className="flex flex-col items-center">
            <span>🔥</span>
            <small>Trending</small>
          </button>
          <button className="flex flex-col items-center">
            <span>🔔</span>
            <small>Subscriptions</small>
          </button>
          <button className="flex flex-col items-center">
            <span>📺</span>
            <small>Library</small>
          </button>
        </div>
      </div>
    );
  }
}

export default Home;
