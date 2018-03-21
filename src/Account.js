import React, { Component } from 'react';

class AccountInfo extends Component {
  render() {
    return (
      <div className="padding">
        <div>{this.props.info.id} - {this.props.info.attributes['account-name']} - {this.props.info.attributes['account-number']}</div>
        <div>Balance: {this.props.info.attributes.balance}</div>
      </div>
    )
  }
}

export default AccountInfo;