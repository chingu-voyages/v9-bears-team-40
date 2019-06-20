import React from "react";

class SearchBar extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = {
      keyword: ""
    };
  }

  keywordChange = (event: any) => {
    this.setState({ keyword: event.target.value });
  };
  render() {
    return <input onChange={this.keywordChange}></input>;
  }
}

export default SearchBar;
