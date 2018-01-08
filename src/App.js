import React, { Component } from 'react'
import './App.css'
import './semantic-dist/semantic.css'
import ListComponent from './listcomponent/ListComponent.js'
import VotesContainer from './votingcomponent/VotesContainer'

class App extends Component {
  render() {
    return (
      <div>
        <ListComponent />
        <VotesContainer />
      </div>
    );
  }
}

export default App
