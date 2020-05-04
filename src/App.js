import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state ={
    persons: [
      {id: '13djed',name: 'Peter', age: 22},
      {id: '15djed',name: 'Daniel', age: 23},
      {id: '12djed',name: 'Ruth', age: 24}
    ],
    otherState: 'some other state',
    showPersons: false,
  }


  nameChangedHandler = (event) => {
    this.setState({persons: [
      { name:'Peter', age: 22 },
      { name:event.target.value, age: 25 },
      { name:'Ronald', age: 224 }
    ]})

  }

  deletePersonHandler = (personIndex) => {
      // const persons =this.state.persons.slice(); alternative
      const persons = [...this.state.persons];
      persons.splice(personIndex, 1);
      this.setState({persons: persons});
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }
  render() {

    const styles = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    let persons =null;

    if (this.state.showPersons) {
      persons= (
        <div>
        {this.state.persons.map((person, index) => {
          return <Person 
          click={() =>this.deletePersonHandler(index)}
          name = {person.name}
          age = { person.age}
          key={person.id}
          />
        })}
        </div> 
      );
    }
    return (
      <div className="App">
        <h1>
          HELLO
        </h1>
        <button style={styles} onClick={this.togglePersonsHandler}> Toggle </button>
        {persons}
      </div>
    );
  }
}

export default App;
