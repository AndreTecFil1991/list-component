import React, { Component } from 'react'
import styled from 'react-emotion'


export default class Votes extends Component {
    render() {
        const Container = styled('div')`
            margin: 10px;
        `

        const Vote = styled('div')`
            margin: 5px 0px;
        `

        const votes = this.props.votes.map((vote, index) => (
            <Vote
                key={index}
                onClick={() =>
                    this.handleClick(index)
                }>
                {vote}
            </Vote>
        ))

        return (
            <Container>
                {votes}
            </Container>
        );
    }
}