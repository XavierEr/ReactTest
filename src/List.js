import React, { Component } from 'react';

import ListItem from './ListItem';

class List extends Component {
  constructor(props) {
    super(props);
    console.log('constructor');
    this.state = { items: [] };
  }

  componentWillMount() {
    console.log('componentWillMount');
  }

  componentDidMount() {
    console.log('componentDidMount');
    this.setState({
      items: [
        { name: 'Item 1' },
        { name: 'Item 2' },
        { name: 'Item 3' },
        { name: 'Item 4' },
      ]
    });
  }

  render() {
    return (
      <div>
        {
          this.state.items.map((item, i) => {
            return <ListItem item={item} />;
          })
        }
      </div>
    );
  }
}

export default List;