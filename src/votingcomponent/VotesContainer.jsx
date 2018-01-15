
import React, { Component } from 'react'
import styled from 'react-emotion'
import Votes from './Votes'
import { createStore } from 'redux'

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

class VotesContainer extends Component {
    handleSubmit = () => {
        store.dispatch({
            type: 'ADD_MESSAGE',
            message: this.state.value
        })
    }

    componentDidMount() {
        store.subscribe(() => this.forceUpdate());
    }

    render() {
        const votes = store.getState().votes;

        const Container = styled('div') `
            margin-bottom: 30px;
        `

        const Box = styled('div') `
            border: solid 1px black;
            border-radius: 4px;
            min-height: 100px;
        `

        return (
            <Container>
                <h3>{this.props.title}</h3>
                <Box>
                    <Votes votes={votes} />
                </Box>
            </Container>
        )
    }
}

export default VotesContainer;
