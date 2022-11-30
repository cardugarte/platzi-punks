require("@nomicfoundation/hardhat-toolbox")
require('dotenv').config()

/** @type import('hardhat/config').HardhatUserConfig */

const projectId = process.env.INFURA_PROJECT_ID
const PrivateKey = process.env.DEPLOYER_SIGNER_PRIVATE_KEY





module.exports = {
  solidity: "0.8.17",
  networks: {
    goerli: {
      url: `https://goerli.infura.io/v3/${ projectId }`,
      accounts: [
        PrivateKey
      ]
    }
  }
};
