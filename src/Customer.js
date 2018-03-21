import React, { Component } from 'react';

import Account from './Account';

class Customer extends Component {
  render() {
    return (
      <div>
        <div className="alert alert-primary">{this.props.info.id} - {this.props.info.name}</div>
        {
          this.props.info.accountDetails.map((item, i) => {
            return <Account info={item} />
          })
        }
      </div>
    );
  }
}

export default Customer;