import React from 'react';
import { useParams } from 'react-router-dom';

function VideoPlayer() {
  const { id } = useParams(); // get videoId from URL

  return (
    <div className="flex justify-center items-start min-h-screen pt-8 mt-10 px-4">
      <div className="w-full max-w-4xl">
        <div className="relative" style={{ paddingTop: '56.25%' /* 16:9 aspect ratio */ }}>
          <iframe
            src={`https://www.youtube.com/embed/${id}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute top-0 left-0 w-full h-full rounded-lg"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default VideoPlayer;
