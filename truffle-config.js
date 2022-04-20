const path = require("path");
require("dotenv").config({path: "./.env"});
const HDWalletProvider = require("@truffle/hdwallet-provider");
const AccountIndex = 1;
const {GANACHE_LOCAL, GOERLI_INFURA, ROPSTEN_INFURA, MNEMONIC} = process.env;

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  contracts_build_directory: path.join(__dirname, "client/src/contracts"),
  networks: {
    development: {
      port: 7545,
      host: "127.0.0.1",
      network_id: 1337
    },
    ganache_local: {
      provider: function() {
        return new HDWalletProvider(MNEMONIC, GANACHE_LOCAL, AccountIndex)
      },
      network_id: 1337
    },
    goerli: {
      provider: function() {
        return new HDWalletProvider(MNEMONIC, GOERLI_INFURA, AccountIndex)
      },
      network_id: 5
    },
    ropsten: {
      provider: function() {
        return new HDWalletProvider(MNEMONIC, ROPSTEN_INFURA, AccountIndex)
      },
      network_id: 3,
      networkCheckTimeout: 10000,
      timeoutBlocks: 200
    },
  },
  compilers: {
    solc: {
      version: "^0.8.0"
    }
  }
};
