// Specifies the version of Solidity, using semantic versioning.
// Learn more: https://solidity.readthedocs.io/en/v0.5.10/layout-of-source-files.html#pragma
pragma solidity >=0.7.3;

// Defines a contract named `HelloWorld`.
// A contract is a collection of functions and data (its state). Once deployed, a contract resides at a specific address on the Ethereum blockchain. Learn more: https://solidity.readthedocs.io/en/v0.5.10/structure-of-a-contract.html
contract manufacturingAgreement {
   address payable public sender;
   address payable public receiver;

   uint public expiresAt;
   uint private amount;
   uint public startTime;

   constructor(address payable _receiver, uint _amount, uint _duration) payable {
      require(_receiver != address(0), "receiver = zero address");
      sender = payable(msg.sender);
      receiver = _receiver;
      expiresAt = block.timestamp + _duration;
      amount = _amount;
      startTime = block.timestamp;
   }

   function check() public view returns (uint) {
      require(msg.sender == sender, "Only the sender can check the contract");
      return amount;
   }

   function destroyContract() public {
      require(msg.sender == sender, "Only the sender can destroy the contract");

      selfdestruct(sender);
   }
}

