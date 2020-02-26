import React from 'react';
import logo from './logo.svg';
import './App.css';
import * as axios from 'axios'


const url = 'http://127.0.0.1:8000/calc/'
class App extends React.Component {



  state = {
    name: ''
  };

  onNameChange = val => {
    this.setState({name: val.target.value})
  }


  getData = () => {
    axios.get(url).then(response => console.log(response) )
  };

  componentDidMount() {
    this.getData()
  }

  render() {
    return (
         <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

          <input value={this.state.name} onChange={this.onNameChange}/>
      </header>
    </div>
    )
  }

}

export default App;
