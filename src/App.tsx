import React from 'react';

interface SApp {
  test: string
}

class App extends React.Component<{}, SApp> {
  constructor(props: any) {
    super(props)
    this.state = {
      test: ""
    }
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

  render(){
    return (
      <div className="App">
        <p>
          {this.state.test} test test
        </p>
      </div>
    )
  }
}

export default App;
