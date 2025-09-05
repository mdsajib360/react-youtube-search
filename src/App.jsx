import { Component } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header from "./Components/Header/Header";
import VideoPlayer from "./Components/VideoPlayer/VideoPlayer";
import Home from "./Pages/Home/Home";
import axios from 'axios';
import { videoData } from "../data";
import SearchResults from "./Pages/SearchResult/SearchResults";

class App extends Component {
  state = { searchQuery: "bd", videos: [] };

  handleSearch = () => {       
    const API_KEY = "AIzaSyCv3wL0H5zAAHbX45TusN7DGXp8OjZArJs";
    const search_url = `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=12&key=${API_KEY}&q=${encodeURIComponent(this.state.searchQuery)}`;

    axios.get(search_url)
      .then(res => {
        const videoIds = res.data.items.map(item => item.id.videoId).join(',');
        const STATS_URL = `https://www.googleapis.com/youtube/v3/videos?part=statistics,snippet&id=${videoIds}&key=${API_KEY}`;
        return axios.get(STATS_URL);
      })
      .then(res => {
        const videos = res.data.items.map(item => ({
          title: item.snippet.title,
          channel: item.snippet.channelTitle,
          views: item.statistics.viewCount,
          videoId: item.id,
          thumbnail: item.snippet.thumbnails.high.url,
        }));
        this.setState({ videos });
      })
      .catch(err => console.log(err));

    // const newVideos = videoData[0].items.map((item) => ({
    //   title: item.snippet.title,
    //   channel: item.snippet.channelTitle,
    //   views: item.statistics?.views,
    //   videoId: item.id.videoId,
    //   thumbnail: item.snippet.thumbnails.high.url,
    // }));
    // this.setState({ videos: newVideos });
    
  };
  
 
 
  handleInputChange = (e) => {
    this.setState({ searchQuery: e.target.value });
  };
  updateQuery = (query) => {
    this.setState({ searchQuery: query })
  }
  render() {
    return (
      <Router>
        <Header
          handleSearch={this.handleSearch}
          handleInputChange={this.handleInputChange}
          searchQuery={this.state.searchQuery}
         
        />
        <Routes>
          {console.log("state videos", this.state.videos)}
          <Route
            path="/"
            element={
              <Home
                videos={this.state.videos}
                fetchVideos={this.handleSearch}
                searchQuery={this.state.searchQuery}
                 updateQuery={this.updateQuery}
              />
            }
          />
          <Route
            path="/video/:id"
            element={<VideoPlayer videos={this.state.videos} />}
          />
            <Route path="/searchResults" element={<SearchResults videos={this.state.videos} searchQuery={this.state.searchQuery} />} />

        </Routes>
      </Router>
    );
  }
}

export default App;
