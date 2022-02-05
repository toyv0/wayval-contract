const { base64 } = require("ethers/lib/utils");

const main = async () => {
  const nftContractFactory = await hre.ethers.getContractFactory("Wave");
  const nftContract = await nftContractFactory.deploy();
  await nftContract.deployed();
  console.log("Wave contract deployed to:", nftContract.address);

  const input = "data:application/json;base64,ewogICJ0b2tlbnMiOiBbCiAgICB7CiAgICAgICJzeW1ib2wiOiAiVVNEQyIsCiAgICAgICJiYWxhbmNlIjogIjEwMC4wMDAwMDAiLAogICAgICAiYWRkcmVzcyI6ICIweDRkYmNkZjliNjJlODkxYTdjZWM1YTI1NjhjM2Y0ZmFmOWU4YWJlMmIiCiAgICB9LAogICAgewogICAgICAic3ltYm9sIjogIkRBSSIsCiAgICAgICJiYWxhbmNlIjogIjEwMC4wMDAwMDAiLAogICAgICAiYWRkcmVzcyI6ICIweDU1OTJlYzBjZmI0ZGJjMTJkM2FiMTAwYjI1NzE1MzQzNmExZjBmZWEiCiAgICB9CiAgXSwKICAibmZ0cyI6IFsKICAgIHsKICAgICAgIm5hbWUiOiAiU3F1YXJlTkZUIiwKICAgICAgImlkIjogIjIiLAogICAgICAiYWRkcmVzcyI6ICIweGViNWE4NGU3ZjFiNTllMGRjYzJmNjI4Yzc4NDk5MThiYTI5NzRjZWIiCiAgICB9LAogICAgewogICAgICAibmFtZSI6ICJTcXVhcmVORlQiLAogICAgICAiaWQiOiAiMSIsCiAgICAgICJhZGRyZXNzIjogIjB4ZWI1YTg0ZTdmMWI1OWUwZGNjMmY2MjhjNzg0OTkxOGJhMjk3NGNlYiIKICAgIH0KICBdLAogICJuYXRpdmVCYWxhbmNlIjogewogICAgImJhbGFuY2UiOiAiMC4wNjU1NiIsCiAgICAic3ltYm9sIjogIlJJTiIKICB9LAogICJhY2NvdW50IjogIm9yaWdpbi5ldGgiLAogICJkZXN0aW5hdGlvbiI6ICJkZXN0aW5hdGlvbi5ldGgiLAogICJzaWduYXR1cmUiOiAib3JpZ2luQWNjb3VudFNpZ25hdHVyZSIKfQ==";
  const destination = '0xe3c7863FB88897f7C3C2fd69B1De0cE633CE1564';

  let txn = await nftContract.makeWave(input, destination);
  await txn.wait();

  // txn = await nftContract.makeWave();
  // await txn.wait();
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
