module.exports = {
 
  networks: {
    development_7545: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*", // Match any network ID
    },
    
    development_9545: {
      host: "localhost",
      port: 9545,
      network_id: "*", // Match any network ID
    },
  },
  compilers: {
    solc: {
      version: "0.4.18", // Use this specific version
    },
  },
};