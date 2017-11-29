import React, { Component } from 'react'
import Item from './Item.js'
import products from '../js/MockData.js'

class ListComponent extends Component {
    render() {
        const sortedProducts = products.sort((a, b) => (b.votes - a.votes));
        let productComponents = sortedProducts.map(product => (
            <Item
                id={product.id}
                key={"productid-" + product.id}
                title={product.title}
                description={product.description}
                url={product.url}
                votes={product.votes}
                submitterAvatarUrl={product.submitterAvatarUrl}
                productImageUrl={product.productImageUrl}
            />
        ));
        return <div className="ui unstackable items">{productComponents}</div>;
    }
}

export default ListComponent