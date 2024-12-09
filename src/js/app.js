// Initialize Web3 with Ganache's local Ethereum provider
let web3;
web3 = new Web3("http://127.0.0.1:7545"); // Use Ganache's local Ethereum provider
console.log("Using Ganache's provider.");

// Contract ABI and Address (replace with your actual ABI and contract address)
const contractABI = [{
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
}];  // Replace with your ABI (the one you provided earlier)
const contractAddress = "0x0d49543036587d52A945FBc946A975D228e56877"; // Replace with your deployed contract address

// Create a contract instance
const dealContract = new web3.eth.Contract(contractABI, contractAddress);

// Display the buyer and seller addresses in the HTML
async function displayAddresses() {
  try {
    const accounts = await web3.eth.getAccounts(); // Fetch Ganache accounts
    const buyer = accounts[0]; // Use the first account as the buyer
    const seller = accounts[1] || buyer; // Use the second account as the seller (or default to the first account if there's only one)

    document.getElementById("buyerAddress").innerText = buyer; // Display buyer address
    document.getElementById("sellerAddress").innerText = seller; // Display seller address
  } catch (error) {
    console.error("Error fetching addresses:", error);
  }
}

// Function to send an order (for the buyer)
async function sendOrder() {
  try {
    const accounts = await web3.eth.getAccounts(); // Fetch accounts
    const buyer = accounts[0]; // Use the first account as the buyer
    
    const goods = "Laptop"; // Example product
    const quantity = 2; // Example quantity

    await dealContract.methods
      .sendOrder(goods, quantity)
      .send({ from: buyer, value: web3.utils.toWei("0.1", "ether") });

    // Update the order info section
    document.getElementById("orderNumber").innerText = "1"; // Example data
    document.getElementById("goods").innerText = goods;
    document.getElementById("quantity").innerText = quantity;
    document.getElementById("price").innerText = web3.utils.toWei("0.1", "ether");

    alert("Order sent successfully!");
  } catch (error) {
    console.error("Error sending order:", error);
    alert(`Error: ${error.message}`);
  }
}

// Function to send a price (for the seller)
async function sendPrice() {
  try {
    const accounts = await web3.eth.getAccounts(); // Fetch accounts
    const seller = accounts[1]; // The seller address (assumes the second account)

    const orderNo = 1; // Example order number
    const price = web3.utils.toWei("0.2", "ether"); // Example price
    const priceType = 1; // 1 for order price, 2 for shipment price

    await dealContract.methods
      .sendPrice(orderNo, price, priceType)
      .send({ from: seller });

    // Update the order info section with the price
    document.getElementById("price").innerText = price;

    alert("Price sent successfully!");
  } catch (error) {
    console.error("Error sending price:", error);
    alert(`Error: ${error.message}`);
  }
}

// Initialize the dApp
document.addEventListener("DOMContentLoaded", () => {
  displayAddresses(); // Fetch and display both buyer and seller addresses
});
