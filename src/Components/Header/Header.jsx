import { Component } from "react";
import Logo from "../Logo";
import SearchBar from "../SearchBar";

class Header extends Component {
    state = { redirect: false };

  render() {
    const { handleSearch, handleInputChange, searchQuery } = this.props;
    return (
      <header className="py-2 bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto flex items-center justify-between ">
          <Logo />

          <SearchBar
            handleSearch={handleSearch}
            handleInputChange={handleInputChange}
            searchQuery={searchQuery}
          />

          <div className="space-x-3 text-xl">
            <span>🔔</span>
            <span>👤</span>
          </div>
          
        </div>
      </header>
    );
  }
}

export default Header;
