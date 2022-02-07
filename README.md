# wayval

"npm run local" to test the contract locally with hardhat 
"npm run deploy:mumbai" to test the contract on the matic mumbai testnet
"npm run deploy:rinkeby" to test the contract on the matic mumbai rinkeby

Wayval is a project that allows users to mint an ERC-721 representation of an account's assets to provide verifiable account information.
This contract is currently live on the mumbai testnet: https://mumbai.polygonscan.com/address/0xA36210fA6072b9E4FB6b906C48D40cE8213F1bb7#code
The frontend for the contract can be found here: https://github.com/toyv0/wayval-ui

To see how metadata of a wave is stored if you query a tokenId you can get the encoded json and enter that into your url. Note that you will have to add a comma after "data:application/json;base64". 

Steps to query metadata of a wave. 
1. check out the read function of tokenURI https://mumbai.polygonscan.com/address/0xa36210fa6072b9e4fb6b906c48d40ce8213f1bb7#readContract
2. add a valid token id, example: 5
3. copy data:application/json;base64,<PASTE_ENCODED_JSON_HERE> (make sure to add the comma after "base64"
4. see the wave metadata! (if you want to skip to just seeing the metadata I'll add an example to use below. 

data:application/json;base64,eyJ0b2tlbnMiOlt7InN5bWJvbCI6IlRTVCIsImJhbGFuY2UiOiIxLjAwMDAwMCIsImFkZHJlc3MiOiIweDJkNzg4MmJlZGNiZmRkY2UyOWJhOTk5NjVkZDNjZGY3ZmNiMTBhMWUifV0sIm5mdHMiOlt7Im5hbWUiOiJXYXZlIiwiaWQiOiI0IiwiYWRkcmVzcyI6IjB4YTM2MjEwZmE2MDcyYjllNGZiNmI5MDZjNDhkNDBjZTgyMTNmMWJiNyJ9LHsibmFtZSI6IldhdmUiLCJpZCI6IjMiLCJhZGRyZXNzIjoiMHhhMzYyMTBmYTYwNzJiOWU0ZmI2YjkwNmM0OGQ0MGNlODIxM2YxYmI3In0seyJuYW1lIjoiIiwiaWQiOiIxMjMiLCJhZGRyZXNzIjoiMHhhMDdlNDVhOTg3ZjE5ZTI1MTc2Yzg3N2Q5ODM4ODg3ODYyMjYyM2ZhIn1dLCJuYXRpdmVCYWxhbmNlIjp7ImJhbGFuY2UiOiIwLjk5NTkiLCJzeW1ib2wiOiJNQVRJQyJ9LCJvcmlnaW4iOiIweDQzNGZhOWQwNDU4MTcwNmRjYTNhOTIyODA5YTFjNTJiYTFlOWM0NjIifQ==
