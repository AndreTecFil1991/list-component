
import React, { Component } from 'react'
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

        return (
            <div className='ui segment' style={{ border: 'solid 1px black', borderRadius: '4px' }}>
                <Votes votes={votes} />
            </div>
        )
    }
}

export default VotesContainer;
