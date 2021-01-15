require("@nomiclabs/hardhat-waffle");
require('dotenv').config()

const PK = process.env.PK

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.6.6",
  settings: {
    optimizer: {
      enabled: true,
      runs: 200
    }
  },
  networks: {
    xdai: {
      url: `https://rpc.xdaichain.com`,
      chainId: 100,
      accounts: [`0x${PK}`],
      gasPrice: 1
    }
  }
};
