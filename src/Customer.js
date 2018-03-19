import React, { Component } from 'react';

import CustomerDetails from './CustomerDetails';

class Customer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="customer-id">{this.props.info.id}</div>
        <CustomerDetails accounts={this.props.info.attributes.accounts}/>
      </div>
    );
  }
}

export default Customer;