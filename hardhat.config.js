require("@nomiclabs/hardhat-waffle");
require("dotenv").config();

module.exports = {
  solidity: "0.8.4",
  networks: {
    hardhat: {
      chainId: 1337,
      gas: 12000000,
      blockGasLimit: 0x1fffffffffffff,
      allowUnlimitedContractSize: true
    },
    alfajores: {
      url: "https://alfajores-forno.celo-testnet.org",
      chainId: 44787,
      accounts: ["547c7bdb1751eced86f43f102148c1b633610ef919e5a9390ed20921784e3075"]
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