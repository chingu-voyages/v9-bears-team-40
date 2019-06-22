import React from "react";

class SearchBar extends React.Component {
  state = {
    keyword: ""
  };

  keywordChange = (event: any) => {
    this.setState({ keyword: event.target.value });
  };
  render() {
    return <input onChange={this.keywordChange}></input>;
  }
}

export default SearchBar;
