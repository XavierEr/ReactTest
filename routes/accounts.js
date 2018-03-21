var express = require('express');

var router = express.Router();

router.get('/', function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  var stringValue = `[{
		"id": "A000001",
		"type": "accounts",
		"attributes": {
			"account-name": "Bonus$aver",
			"account-number": "0123123123",
			"balance": "18900.76",
			"activate": true
		},
		"links": {
			"self": "http://127.0.0.1:8080/retail/api/v3/accounts/A000001"
		}
	},
	{
		"id": "A000002",
		"type": "accounts",
		"attributes": {
			"account-name": "Excel Saver",
			"account-number": "0123123124",
			"balance": "1.00",
			"activate": false
		},
		"links": {
			"self": "http://127.0.0.1:8080/retail/api/v3/accounts/A000002"
		}
	},
	{
		"id": "A000003",
		"type": "accounts",
		"attributes": {
			"account-name": "Extra$aver",
			"account-number": "0456456456",
			"balance": "100.12",
			"activate": true
		},
		"links": {
			"self": "http://127.0.0.1:8080/retail/api/v3/accounts/A000003"
		}
	},
	{
		"id": "A000004",
		"type": "accounts",
		"attributes": {
			"account-name": "VISA Credit Card",
			"account-number": "4110987612345678",
			"balance": "700.00",
			"activate": true
		},
		"links": {
			"self": "http://127.0.0.1:8080/retail/api/v3/accounts/A000004"
		}
	},
	{
		"id": "A000005",
		"type": "accounts",
		"attributes": {
			"account-name": "Master Card",
			"account-number": "4110987612345679",
			"balance": "18900.76",
			"activate": false
		},
		"links": {
			"self": "http://127.0.0.1:8080/retail/api/v3/accounts/A000005"
		}
	},
	{
		"id": "A000006",
		"type": "accounts",
		"attributes": {
			"account-name": "Bonus$aver",
			"account-number": "010101010",
			"balance": "100000000.00",
			"activate": true
		},
		"links": {
			"self": "http://127.0.0.1:8080/retail/api/v3/accounts/A000006"
		}
	}
]`;
  res.json(JSON.parse(stringValue));
});

module.exports = router;