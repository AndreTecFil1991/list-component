import React, { Component } from 'react';
import { store } from './VotesContainer';


export default class Votes extends Component {

    handleClick = (index) => {
        store.dispatch({
            type: 'DELETE_VOTE',
            index: index
        });
    }

    render() {

        const votes = this.props.votes.map((vote, index) => (
            <div className='comment'
                key={index}
                onClick={() =>
                    this.handleClick(index)
                }>
                {vote}
            </div>
        ))

        return (
            <div className='ui comments'>
                {votes}
            </div>
        );
    }
}