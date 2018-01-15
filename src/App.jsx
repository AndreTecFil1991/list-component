import React, { Component } from 'react'
import styled from 'react-emotion'
import './semantic-dist/semantic.css'

import products from './js/MockData.js'
import ListComponent from './listcomponent/ListComponent'
import VotingComponent from './votingcomponent/VotingComponent'

class App extends Component {
  constructor(props) {
    super(props);
    this.handleProductVote = this.handleProductVote.bind(this);
    this.changeSort = this.changeSort.bind(this);
    this.state = {
      products: [],
      sort: 'asc'
    };
  }

  componentDidMount() {
    this.setState({
      products: this.props.products
    });
  }

  //################################################################################################################################################################
  //########## functions for ListComponent ########################################################################################################################
  //##############################################################################################################################################################
  handleProductVote(productID, type) {
    console.log("Voted Product: " + productID);
    let products = this.state.products;
    products.find(product => {
      if (product.id === productID) {
        if (type === "up")
          Object.assign({}, product, { votes: product.votes++ });
        else
          Object.assign({}, product, { votes: product.votes-- });
      }
    });

    this.setState({
      products
    });
  }

  changeSort(type) {
    this.setState({ sort: type })
  }
  //##############################################################################################################################################################
  //########## end of functions for ListComponent #################################################################################################################
  //################################################################################################################################################################

  render() {
    //CSS with emotion
    const LeftContainer = styled('div') `
      float: left;
      width: 60%;
    `

    const RightContainer = styled('div') `
      width: 35%;
    `

    const Container = styled('div') `
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
          <ListComponent
            sort={this.state.sort}
            products={products}
            changeSort={this.changeSort}
            handleProductVote={this.handleProductVote}
          />
        </LeftContainer>
        <RightContainer>
          <VotingComponent titles={votingTitles} />
        </RightContainer>
      </Container>
    );
  }
}

export default App
