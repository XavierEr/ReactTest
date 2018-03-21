var express = require('express');

var router = express.Router();

router.get('/', function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  var stringValue = `[{
		"id": "C000001",
		"type": "customers",
		"attributes": {
			"customer-relationship-id": "QAZWSX001RT",
			"customer-name": "Michael",
			"accounts": [{
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
			"accounts": [{
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
				}
			]
		},
		"links": {
			"self": "http://127.0.0.1:8080/retail/api/v3/customers/C000002"
		}
	}
]`;
  res.json(JSON.parse(stringValue));
});

module.exports = router;