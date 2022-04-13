const TokenSale = artifacts.require("MyTokenSale");
const Token = artifacts.require("MyToken");

const { BN, expect } = require('./setupchai');

require("dotenv").config({ path: "../.env" });

contract("TokenSale Test", async (accounts) => {

    const [deployerAccount, recipient, anotherAccount] = accounts;

    it("should not have any tokens in deplyerAccount", async() => {
        let instance = await Token.deployed();
        return expect(instance.balanceOf(deployerAccount)).to.eventually.be.a.bignumber.equal(new BN(0));

    });

});