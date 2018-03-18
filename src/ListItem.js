import React, { Component } from 'react';

class ListItem extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    return (
      <div>{this.props.item.name}</div>
    );
  }
}

export default ListItem;