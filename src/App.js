import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component{
  state = {
    persons : [
      {name:'Ale', age:'23'},
      {name:'Rafael', age:'25'},
      {name:'Juliana', age:'28'}
    ]
  }

  switchNameHandler = () => {
    this.setState(
      {
        persons : [
          {name:'Ale', age:'22'},
          {name:'Rafael', age:'24'},
          {name:'Juliana', age:'24'}
        ]
      }
    );
  }

  render(){
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button onClick={this.switchNameHandler}>Switch name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My hobbies: racing </Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
    );
  }
}

export default App;
