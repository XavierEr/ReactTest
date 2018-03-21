import React, { Component } from 'react';

import Customer from './Customer';

import './list.css';

class List extends Component {
  constructor(props) {
    super(props);
    var self = this;
    self.state = { customers: [] };
  }

  componentDidMount() {
    var self = this;

    Promise.all([self.getCustomers(), self.getAccounts()])
      .then(([customers, accounts]) => {
        var customerDetails = customers.map(customer => {
          var customerDetail = {
            id: customer.id,
            name: customer.attributes['customer-name']
          };

          var accountDetails = customer.attributes.accounts.map(accountId => {
            var account = accounts.find(account => {
              return account.id === accountId['account-id'];
            })
            return account;
          })

          customerDetail.accountDetails = accountDetails;

          return customerDetail;
        });
        self.setState({ customers: customerDetails });
      });
  }

  getCustomers() {
    return fetch('/api/customers', {
      method: 'GET'
    }).then(response => {
      if (response.ok) {
        return response.json();
      }
    });
  }

  getAccounts() {
    return fetch('/api/accounts', {
      method: 'GET'
    }).then(response => {
      if (response.ok) {
        return response.json();
      }
    });
  }

  render() {
    return (
      <div className="padding">
        {
          this.state.customers.map((item, i) => {
            return <Customer info={item} />;
          })
        }
      </div>
    );
  }
}

export default List;