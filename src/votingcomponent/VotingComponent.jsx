import React, { Component } from 'react';
import styled from 'react-emotion'
import VotesContainer from './VotesContainer'


export default class VotingComponent extends Component {
    render() {
        const Container = styled('div') `
            width: 35%;
            position: fixed;
            top: 100px;
            right: 30px;
        `
        const titles = this.props.titles

        let votesContainers = titles.map(title => (
            <VotesContainer title={title} />
        ))

        return (
            <Container>
                {votesContainers}
            </Container>
        );
    }
}