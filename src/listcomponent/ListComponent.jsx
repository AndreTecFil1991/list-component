import React, { Component } from 'react'
import styled from 'react-emotion'
import Item from './Item'

class ListComponent extends Component {
    constructor(props) {
        super(props);
        this.changeSort = this.changeSort.bind(this);
        this.handleProductVote = this.handleProductVote.bind(this);
    }

    changeSort(type) {
        this.props.changeSort(type)
    }

    handleProductVote(productID, type) {
        this.props.handleProductVote(productID, type)
    }

    render() {
        const IconUp = styled('i') `
            margin: 2px 10px -2px 10px;
            border: solid #4183C4;
            border-width: 0 3px 3px 0;
            display: inline-block;
            padding: 3px;
            transform: rotate(-135deg);
            -webkit-transform: rotate(-135deg);
        `

        const IconDown = styled('i') `
            margin: 2px 10px 3px 10px;
            border: solid #4183C4;
            border-width: 0 3px 3px 0;
            display: inline-block;
            padding: 3px;
            transform: rotate(45deg);
            -webkit-transform: rotate(45deg);
        `

        const sort = this.props.sort
        const products = this.props.products.sort((a, b) => {
            return sort === 'desc' ? (b.votes - a.votes) : (a.votes - b.votes)
        })
        let productComponents = products.map(product => (
            <Item
                id={product.id}
                key={"productid-" + product.id}
                title={product.title}
                description={product.description}
                url={product.url}
                votes={product.votes}
                submitterAvatarUrl={product.submitterAvatarUrl}
                productImageUrl={product.productImageUrl}
                onVote={this.handleProductVote}
            />
        ))
        return (            
            <div>
                <a onClick={() => { this.changeSort('asc'); }}>
                    <IconUp /> Sort Asc
                </a>
                <a onClick={() => { this.changeSort('desc'); }}>
                    <IconDown /> Sort Desc
                </a>
                <div className="ui unstackable items">{productComponents}</div>
            </div>
        )
    }
}

export default ListComponent