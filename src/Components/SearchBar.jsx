import React, { Component } from 'react';
import searchIcon from '../assets/search.png';

class SearchBar extends Component {
  

  handleInputChange = (e) => {
    this.setState({ searchQuery: e.target.value });
    this.handleSearch()
  };

  handleSearch = () => {
    if (this.props.onSearch) {
      this.props.onSearch(this.state.searchQuery);
    }
  };

  handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      this.handleSearch();
    }
  };

  render() {
    return (
      <div className="flex items-center w-full max-w-xl">
        <input
          type="text"
          placeholder="Search"
          className="w-full h-10 px-4 border border-gray-300 rounded-l-full focus:outline-none"
          value={this.props.searchQuery}
          onChange={this.handleInputChange}
          onKeyPress={this.handleKeyPress}
        />
        <button
          type="button"
          className="h-10 w-14 flex items-center justify-center bg-gray-100 border border-gray-300 border-l-0 rounded-r-full hover:bg-gray-200"
          onClick={this.handleSearch}
        >
          <img src={searchIcon} alt="Search" className="h-5 w-5" />
        </button>
      </div>
    );
  }
}

export default SearchBar;
