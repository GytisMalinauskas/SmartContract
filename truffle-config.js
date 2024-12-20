module.exports = {
 
  networks: {
    development_7545: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*", // Match any network ID
    },
    
    development_8545: {
      host: "localhost",
      port: 8545,
      network_id: "*", // Match any network ID
    },

    development_9545: {
      host: "localhost",
      port: 9545,
      network_id: "*", // Match any network ID
    },
  },
  sepolia: {
    provider: () =>
      new HDWalletProvider(
        process.env.MNEMONIC,
          `https://sepolia.infura.io/v3/${process.env.INFURA_PROJECT_ID}`      ),
    network_id: 11155111,
    gas: 450000,
    gasPrice: 100000
  },
  compilers: {
    solc: {
      version: "0.4.18", // Use this specific version
    },
  },
};