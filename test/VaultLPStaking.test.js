const { expect } = require("chai")
const { ethers } = require("hardhat")
const { BigNumber } = require("ethers")
const { getAddr, deployNew } = require("./util/helpers")

describe("Vault LPStaking:", function () {
    let mockToken, lpStaking
    let chainId, startBlock, bonusEndBlock, emissionsPerBlock, poolId, allocPoint, depositAmt, stargateToken

    before(async function () {
        ;({ owner, alice, badUser1, fakeContract } = await getAddr(ethers))
        poolId = 0
        chainId = 1
        allocPoint = 3
        bonusEndBlock = 1000000000
        emissionsPerBlock = "1000000000000000000"
        depositAmt = BigNumber.from("1000000000000000000")
    })

    beforeEach(async function () {
        // todo: make an entire periphery fixture from LPStaking.sol
        startBlock = (await getCurrentBlock()) + 3
        stargateToken = await deployNew("MockToken", ["Token", "TKN", 18])
        lpStaking = await deployNew("LPStaking", [stargateToken.address, emissionsPerBlock, startBlock, bonusEndBlock])
        mockToken = await deployNew("MockToken", ["Token", "TKN", 18])
        await mockToken.transfer(lpStaking.address, "10000000000000000000000")
        // fixme: the line below reverts with
        // Error: cannot estimate gas; transaction may fail or may require manual gas limit
        // when using solc 0.8.x
        // vault = await deployNew("LPVault", [mockToken.address, "LPV", "LPV"])
    })

    it("IERC4626 adherence", async function () {
        // todo: set up mock to have non-zero values
        // check view methods to check interface compafibility
        expect(true).to.equal(true)
    })

    it("deposit() and withdraw() integration", async function () {
        // todo: call vault.deposit(...)
        // assert event Deposit emitted by Vault and its params
        // assert event Deposit emitted by LPStaking and its params
        // assert staked amounts and shares increase
        
        // todo: call withdraw(...)
        // assert all events and amounts
        // assert balances and shares change
        expect(true).to.equal(true)
    })
})
