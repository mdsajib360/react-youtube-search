import { Component } from "react";
import VideoCard from "../../Components/VideoCard";
import { videoCategoryList } from "../../../category";
const categories = videoCategoryList[0].items

class Feed extends Component {
  state = {
    selectedCategory: "",
  };

  componentDidMount() {
    this.props.fetchVideos(this.props.searchQuery || "web development roadmap");
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.searchQuery !== this.props.searchQuery) {
      this.props.fetchVideos(this.props.searchQuery || "next js");
    }

    if (prevState.selectedCategory !== this.state.selectedCategory) {
      const query =
        this.state.selectedCategory === ""
          ? "web development roadmap"
          : this.state.selectedCategory;
      this.props.fetchVideos(query);
    }
  }

  handleCategoryClick = (category) => {
    this.setState({ selectedCategory: category });
  };

  render() {
    const { selectedCategory } = this.state;
    // console.log(selectedCategory);
    
    return (
      <div className="flex-1 p-6 overflow-x-hidden">
        {/* Category selector */}
        <div className="flex gap-4 mb-6 overflow-x-scroll">
          {categories.slice(0).map((category) => (
  <button
    key={category.id} // use a unique key
    onClick={() => this.handleCategoryClick(category.snippet.title)}
    className={`px-4 py-2 rounded-full whitespace-nowrap ${
      selectedCategory === category.snippet.title
        ? "bg-blue-500 text-white"
        : "bg-gray-200 text-gray-800"
    }`}
  >
    {category.snippet.title}
  </button>
))}

        </div>

        {/* Video feed */}
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
          {this.props.videos.map((video) => (
            <VideoCard key={video.videoId} video={video} />
          ))}
        </div>
      </div>
    );
  }
}

export default Feed;
