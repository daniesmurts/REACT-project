import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state ={
    persons: [
      {name: 'Peter', age: 22},
      {name: 'Daniel', age: 23},
      {name: 'Ruth', age: 24}
    ],
    otherState: 'some other state'
  }

  switchNameHandler =(newName) => {
    this.setState({persons: [
      { name:newName, age: 22 },
      { name:'Ronnie', age: 25 },
      { name:'Ronald', age: 224 }
    ]})
  }

  nameChangedHandler = (event) => {
    this.setState({persons: [
      { name:'Peter', age: 22 },
      { name:event.target.value, age: 25 },
      { name:'Ronald', age: 224 }
    ]})

  }
  render() {

    const styles = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }
    return (
      <div className="App">
        <h1>
          HELLO
        </h1>
        <button style={styles} onClick={()=>this.switchNameHandler('steveJohn')}> Switch name </button>
        <Person 
        name={this.state.persons[0].name} 
        age={this.state.persons[0].age}/>
        <Person 
        name={this.state.persons[1].name} 
        age={this.state.persons[1].age}
        click={this.switchNameHandler.bind(this, 'getty')}
        changed={this.nameChangedHandler}
        > My Hobbies: Racing</Person>
        <Person 
        name={this.state.persons[2].name} 
        age={this.state.persons[2].age} />
      </div>
    );
  }
}

export default App;
