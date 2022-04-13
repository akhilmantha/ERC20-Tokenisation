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

    it("all tokens should be in TokenSale smartcontract by default", async() => {
        let instance = await Token.deployed();
        let balanceOfTokenSaleSmartContract = await instance.balanceOf(TokenSale.address);
        let totalSupply = await instance.totalSupply();
        expect(balanceOfTokenSaleSmartContract).to.be.a.bignumber.equal(totalSupply);

    });

});