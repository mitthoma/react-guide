import './App.css';
import Person from './Components/Person';
import { Component } from 'react';
import styled from 'styled-components';



class App extends Component {

    state = {

      persons: [
        { id: 'dfassgv23', name: 'Maximillian', age: 29 },
        { id: 'daskkia23', name: 'Manu', age: 29 },
        { id: 'dfasgghsu', name: 'Stephanie', age: 27 }
      ],
      otherState: 'some other value',
      showPersons: false
    }

//delete a person from the array of persons
    deletePersonHandler = (personIndex) => {

      // const persons = this.state.persons.slice();
      const persons = [...this.state.persons];
      persons.splice(personIndex, 1);
      this.setState({persons: persons});

    }

    nameChangedHandler = (event, id) => {

      const personIndex = this.state.persons.findIndex(p => {
        return p.id === id;
      });

      const person = {

        ...this.state.persons[personIndex]

      };

      person.name = event.target.value;

      const persons = [...this.state.persons];
      persons[personIndex] = person;

      this.setState( { persons: persons });

    }

    togglePersonsHandler = () => {
      const doesShow = this.state.showPersons;
      this.setState({
        showPersons: !doesShow
      })
    }



  render () {

    //styling

    const style = {
      backgroundColor: 'green',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    };

    let persons = null;

    if (this.state.showPersons) {

      persons = (

        <div>
          { this.state.persons.map((person, index) => {

              return <Person
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={(event) => this.nameChangedHandler(event, person.id)}
                />



            })
          }


        </div>

      )

    }


    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push('red');
    }
    if (this.state.persons.length <=1) {
      classes.push('bold');
    }


      return (

          <div className="App">

            <h1>Hi I'm a React App</h1>
            <p className={classes.join(' ')}>Dynamic classes!</p>
            <button onClick={this.togglePersonsHandler}>

              Toggle Persons


            </button>

            { persons }

          </div>



      );
    }
}

export default App;
