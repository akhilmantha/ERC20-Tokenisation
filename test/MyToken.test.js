const Token = artifacts.require("MyToken");

const { assert } = require("chai");
var chai = require("chai");
const BN = web3.utils.BN;
const chaiBN = require("chai-bn")(BN);
chai.use(chaiBN);

var chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);

const expect = chai.expect;

contract("Token Test", async (accounts)) => {
    it("all tokens should be in my account", async () => {
        let instance = await Token.deplyed();
        let totalSupply = await instance.totalSupply();
        //let balance  = await instance.balanceOf(accounts[0]);
        //assert.equal(balance.valueOf(), initialSupply.valueOf(), "The balance was not the same");
        expect(await instance.balanceOf(accounts[0])).to.be.a.bignumber.equal(totalSupply);

    })
} 