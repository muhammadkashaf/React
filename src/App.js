import React from 'react';
import './App.css';


function Coder(props) {          /// functional Component
  return (
    <div>
      <h1>{props.name}</h1>
      <h2>{props.status}</h2>
    </div>
  )
}


class App extends React.Component {   /// Class Component
  state = {
    title: 'Owais',
    status: 'Frondhand Developer'
  }


  updateTheState() {
    this.setState({
      title: 'Waqas',
      status: 'Backend Developer'
    })
  }


  render() {
    console.log(this.state);
    
    return (
      <div className="App">
        

        <h1>State</h1>
        <p>{this.state.title}</p>
        <p>{this.state.status}</p>
        <button onClick={this.updateTheState.bind(this)}>Change the State</button>



        <h1>Props</h1>
        <Coder name="Kashaf" status="single" />
      </div>
    );
  }
}


export default App;
