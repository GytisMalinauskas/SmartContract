export const contractAddress = "0xFc56feBD7d11a2cCDC03F36F01e7Be2e3fC301fd";
export const contractABI = [{
  "constant": true,
  "inputs": [],
  "name": "owner",
  "outputs": [
    {
      "name": "",
      "type": "address"
    }
  ],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
},
{
  "constant": true,
  "inputs": [],
  "name": "buyerAddr",
  "outputs": [
    {
      "name": "",
      "type": "address"
    }
  ],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
},
{
  "inputs": [
    {
      "name": "_buyerAddr",
      "type": "address"
    }
  ],
  "payable": true,
  "stateMutability": "payable",
  "type": "constructor"
},
{
  "anonymous": false,
  "inputs": [
    {
      "indexed": false,
      "name": "buyer",
      "type": "address"
    },
    {
      "indexed": false,
      "name": "name",
      "type": "string"
    }
  ],
  "name": "BuyerRegistered",
  "type": "event"
},
{
  "anonymous": false,
  "inputs": [
    {
      "indexed": false,
      "name": "buyer",
      "type": "address"
    },
    {
      "indexed": false,
      "name": "goods",
      "type": "string"
    },
    {
      "indexed": false,
      "name": "quantity",
      "type": "uint256"
    },
    {
      "indexed": false,
      "name": "orderno",
      "type": "uint256"
    }
  ],
  "name": "OrderSent",
  "type": "event"
},
{
  "anonymous": false,
  "inputs": [
    {
      "indexed": false,
      "name": "buyer",
      "type": "address"
    },
    {
      "indexed": false,
      "name": "orderno",
      "type": "uint256"
    },
    {
      "indexed": false,
      "name": "price",
      "type": "uint256"
    },
    {
      "indexed": false,
      "name": "ttype",
      "type": "int8"
    }
  ],
  "name": "PriceSent",
  "type": "event"
},
{
  "anonymous": false,
  "inputs": [
    {
      "indexed": false,
      "name": "buyer",
      "type": "address"
    },
    {
      "indexed": false,
      "name": "orderno",
      "type": "uint256"
    },
    {
      "indexed": false,
      "name": "value",
      "type": "uint256"
    },
    {
      "indexed": false,
      "name": "now",
      "type": "uint256"
    }
  ],
  "name": "SafepaySent",
  "type": "event"
},
{
  "anonymous": false,
  "inputs": [
    {
      "indexed": false,
      "name": "buyer",
      "type": "address"
    },
    {
      "indexed": false,
      "name": "invoiceno",
      "type": "uint256"
    },
    {
      "indexed": false,
      "name": "orderno",
      "type": "uint256"
    },
    {
      "indexed": false,
      "name": "delivery_date",
      "type": "uint256"
    },
    {
      "indexed": false,
      "name": "courier",
      "type": "address"
    }
  ],
  "name": "InvoiceSent",
  "type": "event"
},
{
  "anonymous": false,
  "inputs": [
    {
      "indexed": false,
      "name": "buyer",
      "type": "address"
    },
    {
      "indexed": false,
      "name": "invoiceno",
      "type": "uint256"
    },
    {
      "indexed": false,
      "name": "orderno",
      "type": "uint256"
    },
    {
      "indexed": false,
      "name": "real_delivey_date",
      "type": "uint256"
    },
    {
      "indexed": false,
      "name": "courier",
      "type": "address"
    }
  ],
  "name": "OrderDelivered",
  "type": "event"
},
{
  "constant": false,
  "inputs": [
    {
      "name": "goods",
      "type": "string"
    },
    {
      "name": "quantity",
      "type": "uint256"
    }
  ],
  "name": "sendOrder",
  "outputs": [],
  "payable": true,
  "stateMutability": "payable",
  "type": "function"
},
{
  "constant": true,
  "inputs": [
    {
      "name": "number",
      "type": "uint256"
    }
  ],
  "name": "queryOrder",
  "outputs": [
    {
      "name": "buyer",
      "type": "address"
    },
    {
      "name": "goods",
      "type": "string"
    },
    {
      "name": "quantity",
      "type": "uint256"
    },
    {
      "name": "price",
      "type": "uint256"
    },
    {
      "name": "safepay",
      "type": "uint256"
    },
    {
      "name": "delivery_price",
      "type": "uint256"
    },
    {
      "name": "delivey_safepay",
      "type": "uint256"
    }
  ],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
},
{
  "constant": false,
  "inputs": [
    {
      "name": "orderno",
      "type": "uint256"
    },
    {
      "name": "price",
      "type": "uint256"
    },
    {
      "name": "ttype",
      "type": "int8"
    }
  ],
  "name": "sendPrice",
  "outputs": [],
  "payable": true,
  "stateMutability": "payable",
  "type": "function"
},
{
  "constant": false,
  "inputs": [
    {
      "name": "orderno",
      "type": "uint256"
    }
  ],
  "name": "sendSafepay",
  "outputs": [],
  "payable": true,
  "stateMutability": "payable",
  "type": "function"
},
{
  "constant": false,
  "inputs": [
    {
      "name": "orderno",
      "type": "uint256"
    },
    {
      "name": "delivery_date",
      "type": "uint256"
    },
    {
      "name": "courier",
      "type": "address"
    }
  ],
  "name": "sendInvoice",
  "outputs": [],
  "payable": true,
  "stateMutability": "payable",
  "type": "function"
},
{
  "constant": true,
  "inputs": [
    {
      "name": "invoiceno",
      "type": "uint256"
    }
  ],
  "name": "getInvoice",
  "outputs": [
    {
      "name": "buyer",
      "type": "address"
    },
    {
      "name": "orderno",
      "type": "uint256"
    },
    {
      "name": "delivery_date",
      "type": "uint256"
    },
    {
      "name": "courier",
      "type": "address"
    }
  ],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
},
{
  "constant": false,
  "inputs": [
    {
      "name": "invoiceno",
      "type": "uint256"
    },
    {
      "name": "timestamp",
      "type": "uint256"
    }
  ],
  "name": "delivery",
  "outputs": [],
  "payable": true,
  "stateMutability": "payable",
  "type": "function"
},
{
  "constant": true,
  "inputs": [],
  "name": "health",
  "outputs": [
    {
      "name": "",
      "type": "string"
    }
  ],
  "payable": false,
  "stateMutability": "pure",
  "type": "function"
}
]; // ABI JSON failas iš Truffle build