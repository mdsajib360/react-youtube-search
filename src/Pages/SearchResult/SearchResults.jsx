import { Component } from "react"
import VideoCard from "../../Components/VideoCard"
import Sidebar from "../../Components/SideBar/Sidebar"

class SearchResults extends Component{


    render() {
        const {videos, searchQuery}= this.props

        return (
            <>
            <div className="flex w-[96%] mx-auto mt-7 gap-6">
  {/* Sidebar */}
  <div className="hidden md:block w-64 bg-gray-900">
    <Sidebar />
  </div>

  {/* Search Results */}
  <div className="flex-1">
    <h2 className="text-xl font-bold mb-4">Search Results for "{searchQuery}"</h2>

    {videos.length ? (
      <div className="flex flex-col gap-4">
        {videos.map((video) => (
          <div
            key={video.videoId}
            className="flex gap-4 hover:bg-gray-100 p-2 rounded-lg cursor-pointer"
          >
            {/* Thumbnail */}
            <img
              src={video.thumbnail}
              alt={video.title}
              className="w-[250px] h-[140px] object-cover rounded-lg flex-shrink-0"
            />

            {/* Video Info */}
            <div className="flex flex-col justify-between">
              <h3 className="font-semibold text-lg line-clamp-2">{video.title}</h3>
              <p className="text-gray-600 text-sm">{video.channel}</p>
              <p className="text-gray-500 text-sm">{video.views} views</p>
            </div>
          </div>
        ))}
      </div>
    ) : (
      <p>No results found</p>
    )}
  </div>
</div>


            </>
        )
    }
}

export default SearchResults