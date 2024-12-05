import Web3 from 'web3';
const web3 = new Web3(Web3.givenProvider || "http://localhost:8545");
const contractAddress = "0xa438bAD2F61212b2c2376e2B96E0E181F7bA8279";
const abi = [/* ABI goes here */];

const contract = new web3.eth.Contract(abi, contractAddress);
console.log("Contract loaded:", contract);
