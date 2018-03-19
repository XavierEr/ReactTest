import React, { Component } from 'react';

import Customer from './Customer';

class List extends Component {
  constructor(props) {
    super(props);
    this.state = { customers: [] };
  }

  componentDidMount() {
    this.setState({
      customers: [
        {
          "id": "C000001",
          "type": "customers",
          "attributes": {
            "customer-relationship-id": "QAZWSX001RT",
            "customer-name": "Michael",
            "accounts": [
              {
                "account-id": "A000001"
              },
              {
                "account-id": "A000002"
              }
            ]
          },
          "links": {
            "self": "http://127.0.0.1:8080/retail/api/v3/customers/C000001"
          }
        },
        {
          "id": "C000002",
          "type": "customers",
          "attributes": {
            "customer-relationship-id": "QAZWSX002RT",
            "customer-name": "Queenie",
            "accounts": [
              {
                "account-id": "A000003"
              },
              {
                "account-id": "A000004"
              },
              {
                "account-id": "A000005"
              },
              {
                "account-id": "A000006"
              },
            ]
          },
          "links": {
            "self": "http://127.0.0.1:8080/retail/api/v3/customers/C000002"
          }
        }
      ]
    });
  }

  render() {
    return (
      <div>
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