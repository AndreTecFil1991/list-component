import React, { Component } from 'react'

class Item extends Component {
    render() {
        return (
            <div className="item">
                <div className="image">
                    <img src={this.props.productImageUrl} alt="" />
                </div>
                <div className="middle aligned content">
                    <div className="header">
                        <a>
                            <i className="large caret up icon" />
                        </a>
                        {this.props.votes}
                    </div>
                    <div className="description">
                        <a>{this.props.title} </a>
                        <p> {this.props.description} </p>
                    </div>
                    <div className="extra">
                        <span>Submitted by: </span>
                        <img
                            className="ui avatar image"
                            src={this.props.submitterAvatarUrl}
                            alt=""
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default Item