import React, { Component } from 'react'
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
                    <i className="large caret up icon" /> Sort Asc
                </a>
                <a onClick={() => { this.changeSort('desc'); }}>
                    <i className="large caret down icon" /> Sort Desc
                </a>
                <div className="ui unstackable items">{productComponents}</div>
            </div>
        )
    }
}

export default ListComponent