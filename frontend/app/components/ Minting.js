"use client";
import { useAccount, useConnect, useDisconnect } from "wagmi";
import React, { useState } from "react";
import abi from "../../ABI/Abi";
///import buytoken from "../../../utils/buytoken";
import { ethers } from "ethers";
const Contract_address = "0x9a9e1712990403Ee6fbf3Bc896877B16420eE787";
const connect = async () => {
  const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
  // Prompt user for account connections
  await provider.send("eth_requestAccounts", []);
  const signer = provider.getSigner();
  console.log("Account:", await signer.getAddress());
};
const value = 0.001;

const buytoken = async () => {
  const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
  // Prompt user for account connections
  await provider.send("eth_requestAccounts", []);
  const signer = provider.getSigner();
  const MyToken = new ethers.Contract(Contract_address, abi, signer);
  let tx = await MyToken.mint(signer._address, 10, {
    value: ethers.utils.parseEther(`${value}`),
  });
  tx.wait();
};
connect();
// buytoken();
const Minting = () => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  return (
    <div>
      Minting
      <div className="flex items-center">
        <input
          type="text"
          className="border border-gray-300 px-4 py-2 mr-2 focus:outline-none"
          placeholder="Enter something..."
          value={inputValue}
          onChange={handleInputChange}
        />
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
          onClick={buytoken}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Minting;
