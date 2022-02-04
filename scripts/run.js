const { base64 } = require("ethers/lib/utils");

const main = async () => {
  const nftContractFactory = await hre.ethers.getContractFactory("Wave");
  const nftContract = await nftContractFactory.deploy();
  await nftContract.deployed();
  console.log("Wave contract deployed to:", nftContract.address);

  let txn = await nftContract.makeWave();
  await txn.wait();

  txn = await nftContract.makeWave();
  await txn.wait();
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();
