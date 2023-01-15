// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract ZkEVMTaiKo is ERC20 {
    constructor() ERC20("zkEVM-Taiko", "L2Tai") {
        _mint(msg.sender, 1000 * 10 ** decimals());
    }
}
