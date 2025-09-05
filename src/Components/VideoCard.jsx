import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class VideoCard extends Component {
  state = {
    isHovered: false,
  };

  render() {
    const { title, channel, views, thumbnail, videoId } = this.props.video;
    const { isHovered } = this.state;

    return (
      <Link
        to={`/video/${videoId}`}
        className="block w-full"
        onMouseEnter={() => this.setState({ isHovered: true })}
        onMouseLeave={() => this.setState({ isHovered: false })}
      >
        {/* Video preview or thumbnail */}
        {isHovered ? (
          <iframe
            width="100%"
            height="192"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1`}
            title={title}
            className="rounded-lg pointer-events-none"
          ></iframe>
        ) : (
          <img
            src={thumbnail}
            alt={title}
            className="rounded-lg w-full h-48 object-cover hover:opacity-80 transition"
          />
        )}

        {/* Video info */}
        <h4 className="mt-2 font-semibold text-base">{title}</h4>
        <p className="text-sm text-gray-600">{channel}</p>
        <p className="text-sm text-gray-500">{views} views</p>
      </Link>
    );
  }
}

export default VideoCard;
