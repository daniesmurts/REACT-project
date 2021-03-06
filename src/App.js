import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components';
import Person from './Person/Person';

const StyledBtn = styled.button`
  background-color: ${props => props.alt ? 'red' : 'green'};
      color: white;
      font: inherit;
      border: 1px solid blue;
      padding: 8px;
      cursor: pointer;
      &:hover {
        background-color: ${props => props.alt ? 'salmon' : 'lightgreen'};
        color: black;
      }
`;
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


  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p =>{
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons: persons})

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
    // const styles = {
    //   backgroundColor: 'green',
    //   color: 'white',
    //   font: 'inherit',
    //   border: '1px solid blue',
    //   padding: '8px',
    //   cursor: 'pointer',
    //   ':hover': {
    //     backgroundColor: 'lightgreen',
    //     color: 'black',
    //   }
    // }
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
          changed={(event) => this.nameChangedHandler(event, person.id)}
          />
        })}
        </div> 
      );

      // styles.backgroundColor = 'red';
      // styles[':hover'] ={
      //   backgroundColor: 'salmon',
      //   color: 'black'
      // }
    }

    const classes = [];
    if(this.state.persons.length <= 2) {
      classes.push('red');
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold');
    }

    return (
      
        <div className="App">
          <h1>
            HELLO
          </h1>
          <p className={classes.join(' ')}> Is this working?</p>
          <StyledBtn alt={this.state.showPersons} onClick={this.togglePersonsHandler}> Toggle </StyledBtn>
        {persons}
      </div>
      
      
    );
  }
}

export default App;
