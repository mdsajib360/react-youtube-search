import React from 'react';
import { useParams } from 'react-router-dom';
import VideoCard from '../VideoCard';

function VideoPlayer({ videos }) {
  const { id } = useParams(); // get videoId from URL

  return (
    <div className="grid grid-cols-12 gap-10 w-[96%] mx-auto mt-7">
      <iframe
        src={`https://www.youtube.com/embed/${id}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="w-full h-[650px] rounded-lg col-span-8"
      ></iframe>

      <div className="col-span-4">
        <h2 className="font-semibold mb-2">Recommended Videos</h2>
        <div>
          {
            videos.filter((video) => video.videoId !== id)
              .map(video => (
                <VideoCard key={video.videoId} video={ video} />
            ))
          }
          
        </div>
      </div>
    </div>
  );
}

export default VideoPlayer;
