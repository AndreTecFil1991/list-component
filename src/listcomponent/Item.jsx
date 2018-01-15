import React, { Component } from 'react'

class Item extends Component {
  constructor(props) {
    super(props);
    this.handleVote = this.handleVote.bind(this);
  }

  handleVote(type) {
    this.props.onVote(this.props.id, type);
  }

  render(props) {
    return (
      <div className="item">
        <div className="image">
          <img alt='' src={this.props.productImageUrl} />
        </div>
        <div className="middle aligned content">
          <div className="header">
            <a
              onClick={() => {
                this.handleVote("up");
              }}
            >
              <i className="large caret up icon" />
            </a>
            {this.props.votes}
            <a
              onClick={() => {
                this.handleVote("down");
              }}
            >
              <i className="large caret down icon" />
            </a>
          </div>
          <div className="description">
            <a>{this.props.title} </a>
            <p> {this.props.description} </p>
          </div>
          <div className="extra">
            <span>Submitted by: </span>
            <img alt=''
              className="ui avatar image"
              src={this.props.submitterAvatarUrl}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Item