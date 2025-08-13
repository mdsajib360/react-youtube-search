import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class VideoCard extends Component {
  render() {
    const { title, channel, views, thumbnail, videoId } = this.props;

    return (
      <div className="w-full">
        {/* Clickable thumbnail */}
        <Link to={`/video/${videoId}`}>
          <img
            src={thumbnail}
            alt={title}
            className="rounded-lg w-full h-48 object-cover hover:opacity-80 transition"
          />
        </Link>

        <h4 className="mt-2 font-semibold text-base">{title}</h4>
        <p className="text-sm text-gray-600">{channel}</p>
        <p className="text-sm text-gray-500">{views} views</p>
      </div>
    );
  }
}

export default VideoCard;
