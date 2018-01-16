import React, { Component } from 'react'
import styled from 'react-emotion'

class Item extends Component {
  constructor(props) {
    super(props);
    this.handleVote = this.handleVote.bind(this);
  }

  handleVote(type) {
    this.props.onVote(this.props.id, type);
  }

  render(props) {
    const Item = styled('div')`
      display: flex;
      margin: 1em 0em;
      width: 100%;
      min-height: 0px;
      background: transparent;
      font-size: 1em;
      padding: 0em;
      border: none;
      border-radius: 0rem;
      box-shadow: none;
      transition: box-shadow 0.1s ease;

      &:first-child {
        margin-top: 0em;
      }
    `

    const Image = styled('div')`
      position: relative;
      flex: 0 0 auto;
      display: block;
      float: none;
      margin: 0.5em 1em;
      padding: 0em;
      max-height: '';
      align-self: top;
      >img{
        display: block;
        width: 125px;
        height: auto;
        border-radius: 0.125rem;
        border: none;
      }
    `

    const Header = styled('div')`
      display: inline-block;
      margin: -0.21425em 0em 0em;
      font-family: 'Lato', 'Helvetica Neue', Arial, Helvetica, sans-serif;
      font-weight: bold;
      color: rgba(0, 0, 0, 0.85);
    `

    const Description = styled('div')`
      margin-top: 0.6em;
      max-width: auto;
      font-size: 1em;
      line-height: 1.4285em;
      color: rgba(0, 0, 0, 0.87);
    `
    const Extra = styled('div')`
      display: block;
      position: relative;
      background: none;
      margin: 0.5rem 0em 0em;
      width: 100%;
      padding: 0em 0em 0em;
      top: 0em;
      left: 0em;
      color: rgba(0, 0, 0, 0.4);
      box-shadow: none;
      transition: color 0.1s ease;
    `

    const AvatarImg = styled('img')`
      border-radius: 500rem;
      margin-left: 5px;
    `

    const IconUp = styled('i')`
      margin: 2px 10px -2px 10px;
      border: solid #4183C4;
      border-width: 0 3px 3px 0;
      display: inline-block;
      padding: 3px;
      transform: rotate(-135deg);
      -webkit-transform: rotate(-135deg);
    `

    const IconDown = styled('i')`
      margin: 2px 10px 3px 10px;
      border: solid #4183C4;
      border-width: 0 3px 3px 0;
      display: inline-block;
      padding: 3px;
      transform: rotate(45deg);
      -webkit-transform: rotate(45deg);
    `

    return (
      <Item>
        <Image>
          <img alt='' src={this.props.productImageUrl} />
        </Image>
        <div>
          <Header>
            <a
              onClick={() => {
                this.handleVote("up");
              }}
            >
              <IconUp />
            </a>
            {this.props.votes}
            <a
              onClick={() => {
                this.handleVote("down");
              }}
            >
              <IconDown />
            </a>
          </Header>
          <Description>
            <a>{this.props.title} </a>
            <p> {this.props.description} </p>
          </Description>
          <Extra>
            <span>Submitted by: </span>
            <AvatarImg alt=''
              className="ui avatar image"
              src={this.props.submitterAvatarUrl}
            />
          </Extra>
        </div>
      </Item>
    );
  }
}

export default Item