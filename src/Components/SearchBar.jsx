import React, { Component } from 'react';
import searchIcon from '../assets/search.png';

class SearchBar extends Component {
  
  componentDidUpdate(prevProps) {
    
    // this.handleSearch()
    if (prevProps.searchQuery !== this.props.searchQuery) {
      this.props.handleSearch();
   }
    
  }
  componentDidMount() {
    this.props.handleSearch()
   
  }
  
  render() {
   
    const handleSearchR = () => {
      if (this.props.searchQuery.trim() !== '') {
    // Redirect to a relative page
    window.location.href = `./searchResults`;
  }
    }

    return (
      <div className="flex items-center w-full max-w-xl">
        <input
          type="text"
          placeholder="Search"
          className="w-full h-10 px-4 border border-gray-300 rounded-l-full focus:outline-none"
          onChange={this.props.handleInputChange}
          onKeyPress={this.handleKeyPress}
        />
        <button
          type="button"
          className="h-10 w-14 flex items-center justify-center bg-gray-100 border border-gray-300 border-l-0 rounded-r-full hover:bg-gray-200"
          onClick={handleSearchR}
        >
          <img src={searchIcon} alt="Search" className="h-5 w-5" />
        </button>
      </div>
    );
  }
}

export default SearchBar;
