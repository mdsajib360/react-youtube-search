import { Component } from "react";
import Logo from "../Logo";
import SearchBar from "../SearchBar";

class Header extends Component {
  render() {
    return (
      <header className="flex items-center justify-between px-4 py-2 bg-white shadow-md sticky top-0 z-50">
        <Logo />
        <SearchBar onSearch={this.props.onSearch} />
        <div className="space-x-3 text-xl">
          <span>🔔</span>
          <span>👤</span>
        </div>
      </header>
    );
  }
}

export default Header;
