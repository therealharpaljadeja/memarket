require("@nomiclabs/hardhat-waffle");
require("dotenv").config();

module.exports = {
  solidity: "0.8.4",
  settings: {
    optimizer: {
      enabled: true,
      runs: 1000,
    },
  },
  networks: {
    hardhat: {
      chainId: 1337,
      gas: 12000000,
      blockGasLimit: 0x1fffffffffffff,
      allowUnlimitedContractSize: true
    },
    velasTestnet: {
      url: "https://evmexplorer.testnet.veladev.net/rpc",
      chainId: 111,
      accounts: [process.env.VELAS_PRIVATE_KEY]
    },
    velasDevnet: {
      url: ""
    }
  }
};