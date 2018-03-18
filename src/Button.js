import React, { Component } from 'react';

class Button extends Component {
  constructor(props) {
    super(props);
  }

  handleClick() {
    // this.props.onButtonClick();
  }

  render() {
    return (
      <div onClick={() => this.handleClick()}>Click me!</div>
    );
  }
}

export default Button;