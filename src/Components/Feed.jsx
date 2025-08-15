import React, { Component } from 'react';
import VideoCard from './VideoCard';
import axios from 'axios';

class Feed extends Component {
  state = { videos: [] };

  fetchVideos = (query) => {
    const API_KEY = 'AIzaSyDYXkH69CtWLauymANh7ccZSqg0GSh5dJo';
const search_url = `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=12&key=${API_KEY}&q=${encodeURIComponent(query)}`;

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
  };

  componentDidMount() {
    this.fetchVideos(this.props.searchQuery || 'web development roadmap');
  }

  componentDidUpdate(prevProps) {
    if (prevProps.searchQuery !== this.props.searchQuery) {
      this.fetchVideos(this.props.searchQuery || 'next js');
    }
  }

  render() {
    return (
      <div className="flex-1 p-6">
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
          {this.state.videos.map((video, i) => (
         
            <VideoCard key={i} {...video} />
          ))}
        </div>
      </div>
    );
  }
}

export default Feed;
