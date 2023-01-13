// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract ZkEVMzkSync is ERC20 {
    constructor() ERC20("zkEVM-zkSync", "L2Sync") {
        _mint(msg.sender, 1000 * 10 ** decimals());
    }
}
