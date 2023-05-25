const { assert } = require("chai")
const { deployments, ethers, getNamedAccounts } = require("hardhat")
const {
    isCallTrace,
} = require("hardhat/internal/hardhat-network/stack-traces/message-trace")

describe("FundMe", async function () {
    let fundMe
    beforeEach(async function () {
        // const accounts = await ethers.getSigners()
        // const accountZero = accounts[0]
        const { deployer } = await getNamedAccounts()
        await deployments.fixture(["all"])
        fundMe = await ethers.getContract("FundMe", deployer)
    })

    describe("constructor", async function () {
        it("sets the aggregator addresses correctly", async function () {})
    })
})
