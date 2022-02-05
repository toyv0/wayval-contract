const deploy = async () => {
  const nftContractFactory = await hre.ethers.getContractFactory("Wave");
  const nftContract = await nftContractFactory.deploy();
  await nftContract.deployed();
  console.log("Wave contract deployed to:", nftContract.address);

  const input = "data:application/json;base64,eyJ0b2tlbnMiOlt7InN5bWJvbCI6IlRTVCIsImJhbGFuY2UiOiIxLjAwMDAwMCIsImFkZHJlc3MiOiIweDJkNzg4MmJlZGNiZmRkY2UyOWJhOTk5NjVkZDNjZGY3ZmNiMTBhMWUifV0sIm5mdHMiOlt7Im5hbWUiOiJXYXZlIiwiaWQiOiIwIiwiYWRkcmVzcyI6IjB4ZmI2MTJhZDQzZTNiOTgyYWRlMWM0MGE1NmVmMjQwYWJhMWY4YzY5NiJ9LHsibmFtZSI6IldhdmUiLCJpZCI6IjAiLCJhZGRyZXNzIjoiMHhkMjc1NzkwOTkwYmYxMDNhYzBjMmQ3YzMyOTJhOTM1ZWRiNzM2MTExIn0seyJuYW1lIjoiIiwiaWQiOiIxMjMiLCJhZGRyZXNzIjoiMHhhMDdlNDVhOTg3ZjE5ZTI1MTc2Yzg3N2Q5ODM4ODg3ODYyMjYyM2ZhIn1dLCJuYXRpdmVCYWxhbmNlIjp7ImJhbGFuY2UiOiIwLjQ3NzQiLCJzeW1ib2wiOiJNQVRJQyJ9LCJvcmlnaW4iOiIweGUzYzc4NjNmYjg4ODk3ZjdjM2MyZmQ2OWIxZGUwY2U2MzNjZTE1NjQifQ==";
  const dimut = "data:application/json;base64,eyJ0b2tlbnMiOlt7InN5bWJvbCI6IlRTVCIsImJhbGFuY2UiOiIxLjAwMDAwMCIsImFkZHJlc3MiOiIweDJkNzg4MmJlZGNiZmRkY2UyOWJhOTk5NjVkZDNjZGY3ZmNiMTBhMWUifV0sIm5mdHMiOlt7Im5hbWUiOiJXYXZlIiwiaWQiOiIwIiwiYWRkcmVzcyI6IjB4ZmI2MTJhZDQzZTNiOTgyYWRlMWM0MGE1NmVmMjQwYWJhMWY4YzY5NiJ9LHsibmFtZSI6IldhdmUiLCJpZCI6IjAiLCJhZGRyZXNzIjoiMHhkMjc1NzkwOTkwYmYxMDNhYzBjMmQ3YzMyOTJhOTM1ZWRiNzM2MTExIn0seyJuYW1lIjoiIiwiaWQiOiIxMjMiLCJhZGRyZXNzIjoiMHhhMDdlNDVhOTg3ZjE5ZTI1MTc2Yzg3N2Q5ODM4ODg3ODYyMjYyM2ZhIn1dLCJuYXRpdmVCYWxhbmNlIjp7ImJhbGFuY2UiOiIwLjQ3NzQiLCJzeW1ib2wiOiJNQVRJQyJ9LCJvcmlnaW4iOiIweGUzYzc4NjNmYjg4ODk3ZjdjM2MyZmQ2OWIxZGUwY2U2MzNjZTE1NjQifQ=="
  const destination = '0xe3c7863FB88897f7C3C2fd69B1De0cE633CE1564';

  let txn = await nftContract.makeWave(input, destination);
  await txn.wait();
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
