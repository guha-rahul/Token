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

const buytoken = async (amount) => {
  const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
  // Prompt user for account connections
  await provider.send("eth_requestAccounts", []);
  const signer = provider.getSigner();
  const MyToken = new ethers.Contract(Contract_address, abi, signer);
  let tx = await MyToken.mint(signer._address, amount, {
    value: ethers.utils.parseEther(`${value}`),
  });
  tx.wait();
};
// connect();
// buytoken();
const Minting = () => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  return (
    <div className=" w-[40%] h-[80%]  mx-auto mt-10 rounded-full backdrop-brightness-125 flex justify-center items-center relative">
      <div className="text-white flex flex-col justify-center items-center gap-7 rounded-full bg-white bg-opacity-10 w-[90%] h-[90%]">
        <span className="text-3xl">Minting</span>
        <ul className="flex list-none">
          <li>
            <input
              type="text"
              className="border border-gray-300 px-4 py-2 mr-2 focus:outline-none text-black"
              placeholder="Enter token to mint"
              value={inputValue}
              onChange={handleInputChange}
            />
          </li>
          <li>
            <button
              className="bg-purple-950 hover:bg-purple-400 hover: text-white px-4 py-2 rounded"
              onClick={buytoken}
            >
              Mint token
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Minting;
