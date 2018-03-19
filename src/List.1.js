import React, { Component } from 'react';

import Button from './Button';
import ListItem from './ListItem';

class List extends Component {
  constructor(props) {
    super(props);
    this.state = { items: [] };
  }

  componentDidMount() {
    this.setState({
      items: [
        { name: 'Item 1' },
        { name: 'Item 2' },
        { name: 'Item 3' },
        { name: 'Item 4' },
      ]
    });
  }

  handleButtonClick() {
    alert('click');
  }

  render() {
    return (
      <div>
        <Button onButtonClick={this.handleButtonClick} />
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