Contract_address = "0x";
const ethers = require("hardhat");
const hi = 5;
export const tokenbuy = async (minter, amount) => {
  const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
  // Prompt user for account connections
  // await provider.send("eth_requestAccounts", []);
  const signer = provider.getSigner();
  // const MyToken = new ethers.("MyToken");
  // await MyToken.attach(Contract_address).mint(minter, amount, {
  //   value: ethers.utils.parseEther(`${}`),
  // });
  // console.log(`${amount} tokens are minted to ${minter}`);
  console.log("Account:", await signer.getAddress());
};
