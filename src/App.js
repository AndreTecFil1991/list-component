import React, { Component } from 'react'
import styled from 'react-emotion'
import './App.css'
import './semantic-dist/semantic.css'
import ListComponent from './listcomponent/ListComponent.js'
import VotesContainer from './votingcomponent/VotesContainer'

const LeftContainer = styled('div') `
  float: left;
  margin-left: 30px;
  width: 60%;
`

const RightContainer = styled('div') `
  width: 35%;
  position: fixed;
  top: 100px;
  right: 30px;
`


class App extends Component {
  render() {
    return (
      <div>
        <LeftContainer>
          <ListComponent/>
        </LeftContainer>
        <RightContainer>
          <VotesContainer  title={'Last upvoted'}/>
          <VotesContainer  title={'Last downvoted'}/>
        </RightContainer>
      </div>
    );
  }
}

export default App
