require("@nomiclabs/hardhat-waffle");
require("dotenv").config();
require("@nomiclabs/hardhat-etherscan");

module.exports = {
  solidity: "0.8.0",
  networks: {
    rinkeby: {
      url: process.env.RINKEBY_ALCHEMY_API,
      accounts: [process.env.RINKEBY_ACCOUNT_KEY]
    },
    mumbai: {
      url: process.env.MUMBAI_ALCHEMY_API,
      accounts: [process.env.MUMBAI_ACCOUNT_KEY],
    }
  },
  etherscan: {
    apiKey: process.env.POLYGONSCAN_KEY
  },
};
