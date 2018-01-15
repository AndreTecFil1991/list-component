import React, { Component } from 'react'
import Item from './Item'

class ListComponent extends Component {
    constructor(props) {
        super(props);
        this.handleProductVote = this.handleProductVote.bind(this);
        this.changeSort = this.changeSort.bind(this);
        this.state = {
            products: [],
            sort: 'asc'
        };
    }

    changeSort(type) {
        this.setState({ sort: type })
    }

    componentDidMount() {
        this.setState({
            products: this.props.products
        });
    }

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


    render() {
        const sort = this.state.sort
        const products = this.state.products.sort((a, b) => {
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