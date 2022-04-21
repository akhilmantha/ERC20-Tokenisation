## ERC20-Tokenisation
A bunch of smart contracts deployed on ropsten test, used for implementing capped erc20 standard fungible tokens. Also included is a shitty react frontend to whitelist wallet address and buy tokens.

### Running this project

#### Local setup

To run this project locally, follow these steps.

1. Clone the project locally, change into the directory, and install the dependencies:

```sh
git clone https://github.com/akhilmantha/ERC20-Tokenisation.git

cd ERC20-Tokenisation 

# install using NPM 
npm install
```

2. Start the local Ganache GUI or Ganache CLI and check the network_id of your ganache node and config in truffle_config. 

```sh
ganache
```

3. With ganache running, compile and deploy the contracts to the local network in a separate terminal window using truffle 

```sh
truffle compile

truffle migrate --network ganache_local
```

4. Running Tests

```
truffle develop

truffle test
```

5. Start the app 
```
cd client

npm run start 
```

### Configuration

To deploy to Ropsten test or main networks, replace the url and mnemonics in network config in __truffle-config.js__
Use a burner wallet's mnemonics and not an actual one. 

```javascript
// Create a test project on infura.io and select the network, use that url in the network config. 
const path = require("path");
require("dotenv").config({path: "./.env"});
//HDWalletProvider is used to sign off transactions based on the provided mnemonic
const HDWalletProvider = require("@truffle/hdwallet-provider");
// Based on the amount of test ether you have , provide the account index accordingly. 
const AccountIndex = 1;
// change this according to your infura prject id. 
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
```
