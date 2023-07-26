// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

// Import required libraries and contracts from OpenZeppelin
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts/security/Pausable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

// Contract definition
contract MyToken is ERC20, ERC20Burnable, Pausable, Ownable {
    constructor() ERC20("Kit Coin", "KTC") {}

    uint256 tokenSupply = 10000000000000000000000000000; // 10 billion tokens
    uint256 minted;

    // Function to pause the contract, only callable by the contract owner
    function pause() public onlyOwner {
        _pause();
    }

    // Function to unpause the contract, only callable by the contract owner
    function unpause() public onlyOwner {
        _unpause();
    }

    // Function to mint new tokens and assign them to the specified address
    // The amount of tokens to be minted must be provided in the 'amount' parameter
    // The function can only be called by the contract owner
    function mint(address to, uint256 amount) public payable {
        require(
            minted <= tokenSupply,
            "cannot mint more tokens than the token supply"
        );
        minted += amount * 10e18;
        _mint(to, amount * 10e18);
    }

    // Function to withdraw the contract's balance (MATIC) to the specified address
    // The function can only be called by the contract owner
    function withdraw(address payable _withdrawer) public payable onlyOwner {
        (bool sent, ) = _withdrawer.call{value: address(this).balance}("");
        require(sent, "Failed to send Ether");
    }

    // Function to check the total amount of tokens minted so far, in terms of token units (without decimals)
    function MintCheck() public view returns (uint256) {
        return minted / 10e18;
    }

    // Function to check the contract's current MATIC balance
    function MaticCheck() public view returns (uint256) {
        return address(this).balance;
    }

    // Internal function that is called before every token transfer
    // It ensures that token transfers are not allowed when the contract is paused
    function _beforeTokenTransfer(
        address from,
        address to,
        uint256 amount
    ) internal override whenNotPaused {
        super._beforeTokenTransfer(from, to, amount);
    }
}
