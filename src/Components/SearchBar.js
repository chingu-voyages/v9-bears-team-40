import React from "react";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: ""
    };
  }

  keywordHandler = event => {
    this.setState({ keyword: event.target.value });
  };
  render() {
    return <input onChange={this.keywordHandler}></input>;
  }
}

export default SearchBar;
