// app.js

import { contractAddress, contractABI } from './contractConfig.js';

let contract;
let web3;

// Inicializacija
window.addEventListener("load", async () => {
  if (typeof window.ethereum !== "undefined") {
    web3 = new Web3(window.ethereum);
    await ethereum.request({ method: "eth_requestAccounts" });

    const accounts = await web3.eth.getAccounts();
    console.log("Prisijungta su adresu:", accounts[0]);

    contract = new web3.eth.Contract(contractABI, contractAddress);
  } else {
    alert("Įdiek MetaMask, kad galėtum naudoti šią aplikaciją.");
  }
});




// Pirkėjo funkcijos
document.getElementById("sendOrderForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const goods = document.getElementById("goods").value;
  const quantity = document.getElementById("quantity").value;

  const accounts = await web3.eth.getAccounts();
  await contract.methods.sendOrder(goods, quantity).send({ from: accounts[0], value: web3.utils.toWei("0.01", "ether") });
  alert("Užsakymas pateiktas!");
});

document.getElementById("sendSafepayForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const orderno = document.getElementById("orderno").value;
  const amount = document.getElementById("amount").value;

  const accounts = await web3.eth.getAccounts();
  await contract.methods.sendSafepay(orderno).send({ from: accounts[0], value: web3.utils.toWei(amount, "ether") });
  alert("Apmokėta!");
});

// Pardavėjo funkcijos
document.getElementById("sendPriceForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const orderno = document.getElementById("priceOrderNo").value;
  const price = document.getElementById("price").value;

  const accounts = await web3.eth.getAccounts();
  await contract.methods.sendPrice(orderno, web3.utils.toWei(price, "ether"), 1).send({ from: accounts[0] });
  alert("Kaina nustatyta!");
});

document.getElementById("sendInvoiceForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const orderno = document.getElementById("invoiceOrderNo").value;
  const deliveryDate = document.getElementById("deliveryDate").value;
  const courier = document.getElementById("courier").value;

  const accounts = await web3.eth.getAccounts();
  await contract.methods.sendInvoice(orderno, deliveryDate, courier).send({ from: accounts[0] });
  alert("Sąskaita pridėta!");
});
console.log('Ethereum:', window.ethereum); // Tikrina modernųjį tiekėją
console.log('Web3:', web3); // Tikrina `web3` objektą