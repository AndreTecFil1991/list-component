import React, { Component } from 'react'
import styled from 'react-emotion'


export default class Votes extends Component {
    render() {
        const Container = styled('div')`
            margin: 10px;
        `

        const Vote = styled('div')`
            margin: 5px 5px;
            font-weight: bold;
        `

        const votes = this.props.votes.map((vote, index) => (
            <Vote key={index}>
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