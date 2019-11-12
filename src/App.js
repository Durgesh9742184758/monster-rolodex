import React, { Component } from 'react';
import './App.css';
import {CardList} from './Components/card-list/card-list.componnet';
import {Searchbox} from './Components/search-box/search-box.component';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters:[],
      seacrhField: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() { 
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters:users}))
  }

  handleChange(e) {
    this.setState({
      seacrhField: e.target.value
    })
  }

  render() {
    const {monsters,seacrhField} = this.state;
    const filterMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(seacrhField.toLowerCase())
      )
    return (
      <div className = "App">
        <h1>Monsters Rolodex</h1>
        <br></br>
        <Searchbox placeholder = "Search Monsters"
                   handleChange = {this.handleChange}
        ></Searchbox>
        <br></br>
        <CardList monsters = {filterMonsters}></CardList>
      </div>
    )
  }
}