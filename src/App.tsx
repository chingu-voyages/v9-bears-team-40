import React from 'react';
import logo from './logo.svg';
import './App.css';

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

  componentDidMount() {
    fetch('/test')
    .then((res) => {
      console.log(res)
      res.json().then((data) => {
        console.log(data)
        this.setState({test: data.test})
      })
    })
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            {this.state.test}
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    )
  }
}

export default App;
