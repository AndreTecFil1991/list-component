import React, { Component } from 'react'
import styled from 'react-emotion'
import './semantic-dist/semantic.css'

import products from './js/MockData.js'
import ListComponent from './listcomponent/ListComponent'
import VotingComponent from './votingcomponent/VotingComponent'

class App extends Component {
  constructor(props) {
    super(props);
    this.sortChanged = this.sortChanged.bind(this);
    this.state = {
      products: [],
      sort: 'asc'
    };
  }

  sortChanged() {

  }

  render() {
    //CSS with emotion
    const LeftContainer = styled('div') `
      float: left;
      width: 60%;
    `

    const RightContainer = styled('div') `
      width: 35%;
    `

    const Container = styled('div')`
      margin: 30px;
    `

    //titles for VotingComponent continers
    const votingTitles = [
      'Last upvoted',
      'Last downvoted'
    ]
    
    return (
      <Container>
        <LeftContainer>
          <ListComponent products={products}/>
        </LeftContainer>
        <RightContainer>
          <VotingComponent titles={votingTitles}/>
        </RightContainer>
      </Container>
    );
  }
}

export default App
