import React, { Component } from 'react'
import styled from 'react-emotion'
import { createStore } from 'redux'
import './semantic-dist/semantic.css'

import products from './js/MockData.js'
import ListComponent from './listcomponent/ListComponent'
import VotingComponent from './votingcomponent/VotingComponent'

/*handleSubmit = () => {
  store.dispatch({
      type: 'ADD_MESSAGE',
      message: this.state.value
  })
}*/

function reducer(state, action) {
  if (action.type === 'ADD_MESSAGE') {
    return {
      votes: state.votes.concat(action.message)
    }
  } else if (action.type === 'DELETE_VOTE') {
    return {
      votes: [
        ...state.votes.slice(0, action.index),
        ...state.votes.slice(action.index + 1, state.votes.length)
      ]
    }
  } else {
    return state;
  }
}

const initialState = { votes: [] };
export const store = createStore(reducer, initialState);

const listener = () => {
  console.log('Current state: ', store.getState().votes);
}
store.subscribe(listener);

class App extends Component {
  constructor(props) {
    super(props);
    this.handleProductVote = this.handleProductVote.bind(this);
    this.changeSort = this.changeSort.bind(this);
    this.processVote = this.processVote.bind(this);
    this.state = {
      products: products,
      sort: 'asc',
      lastUpvoted: [],
      lastDownvoted: []
    };
  }

  componentDidMount() {
    store.subscribe(() => this.forceUpdate());
  }

  //################################################################################################################################################################
  //########## functions for ListComponent ########################################################################################################################
  //##############################################################################################################################################################
  processVote(votes, product) {
    if (votes.length > 0) {
      let updated = false;
      votes.find(voted => {
        if (voted.id === product.id) {
          Object.assign({}, voted, { counter: voted.counter++ });
          updated = true;
        }
      });

      if (!updated)
        votes.push({
          id: product.id,
          title: product.title,
          counter: 1
        });
    }
    else {
      votes.push({
        id: product.id,
        title: product.title,
        counter: 1
      });
    }

    return votes;
  }

  handleProductVote(productID, type) {
    let products = this.state.products;
    let lastUpvoted = this.state.lastUpvoted;
    let lastDownvoted = this.state.lastDownvoted;
    products.find(product => {
      if (product.id === productID) {
        if (type === "up") {
          Object.assign({}, product, { votes: product.votes++ });
          lastUpvoted = this.processVote(lastUpvoted, product);
        }
        else {
          Object.assign({}, product, { votes: product.votes-- });
          lastDownvoted = this.processVote(lastDownvoted, product);
        }
      }
    });

    this.setState({
      products,
      lastUpvoted,
      lastDownvoted
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
      width: 30%;
    `

    const Container = styled('div') `
      margin: 30px;
      width: 100%;
      display: flex;
    `

    //titles for VotingComponent continers
    const votingComponentConfig = [
      {
        title: 'Last upvoted',
        votes: this.state.lastUpvoted
      }, {
        title: 'Last downvoted',
        votes: this.state.lastDownvoted
      }
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
          <VotingComponent
            config={votingComponentConfig}
          />
        </RightContainer>
      </Container>
    );
  }
}

export default App
