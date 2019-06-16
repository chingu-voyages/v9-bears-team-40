import React from "react";
import styled from "../utils/theme";

//Example styled component
const Heading = styled.h1`
  color: ${props => props.theme.colors.brand};
`;

//App state types
interface AppState {
  test: string;
}

class App extends React.Component<{}, AppState> {
  constructor(props: any) {
    super(props);
    this.state = {
      test: ""
    };
  }

  /*
  How to retrieve data from the Express backend
  componentDidMount() {
    fetch('/test')
    .then((res) => {
      console.log(res)
      res.json().then((data) => {
        console.log(data)
        this.setState({test: data.test})
      })
    })
  }*/

  render() {
    return (
      <div>
        <Heading>Chapterly</Heading>
      </div>
    );
  }
}

export default App;
