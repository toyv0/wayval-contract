const deploy = async () => {
  const nftContractFactory = await hre.ethers.getContractFactory("Wave");
  const nftContract = await nftContractFactory.deploy();
  await nftContract.deployed();
  console.log("Wave contract deployed to:", nftContract.address);
};

const runDeploy = async () => {
  try {
    await deploy();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runDeploy();
