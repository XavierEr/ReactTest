import React, { Component } from 'react';

import AccountInfo from './AccountInfo';

class CustomerDetails extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        {
          this.props.accounts.map((item, i) => {
            return (
              <div>
                <div>{item['account-id']}</div>
                <AccountInfo accountId={item['account-id']} />
              </div>
            );
          })
        }
      </div>
    )
  }
}

export default CustomerDetails;