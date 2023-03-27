import { ethers } from "hardhat";

describe("Deployment", function () {
  it("Normal Pow", async function () {
    const Pow = await ethers.getContractFactory("NormalPow");
    const pow = await Pow.deploy();
    await pow.deployed();

    const tx = await pow.pow(2, 3);
  });
  it("Assembly Pow", async function () {
    const Pow = await ethers.getContractFactory("AssemblyPow");
    const pow = await Pow.deploy();
    await pow.deployed();

    const tx = await pow.pow(2, 3);
  });
});
