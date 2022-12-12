const { expect } = require('chai')
// const { ethers } = require('ethers')
const { ethers } = require('hardhat')

describe('Platzi Punks Contract', () => {
  const setup = async ({ maxSupply = 10000 }) => {
    const [owner] = await ethers.getSigners()
    const PlatziPunks = await ethers.getContractFactory("PlatziPunks")
    const deployed = await PlatziPunks.deploy(maxSupply)
    return {
      owner,
      deployed
    }
  }
  describe('Platzi Punks Contract', () => {
    describe('Deployment', () => {
      it('sets max supply to passed param', async () => {
        const maxSupply = 4000
        const { deployed } = await setup({ maxSupply })
        const returnedMaxSupply = await  deployed.maxSupply()
        expect(maxSupply).to.equal(returnedMaxSupply)
      })
    })
  })
})