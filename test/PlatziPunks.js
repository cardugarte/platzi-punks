const { expect } = require('chai')
const { ethers } = require('hardhat')

describe('Platzi Punks Contract', () => {
  const setup = async ({ maxSupply = 10000}) => {
    const [ owner ] = await ethers.getSigners()
    const PlatziPunks = await ethers.getContractFactory('PlatziPunks')
    const deployed = PlatziPunks.deploy(maxSupply)
    return {
      owner,
      deployed,
    }
  }
  describe('Deployment', () => {
    it('Sets max supply to passed param', async () => {
      const maxSupply = 4000
      const { deployed } = await setup({ maxSupply })
      const returnedMaxSupply = await deployed.maxSupply()
      expect(maxSupply).to.equal(returnedMaxSupply)
    })
  })
})