// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract ZkEVMScroll is ERC20 {
    constructor() ERC20("zkEVM-Scroll", "L2Sco") {
        _mint(msg.sender, 1000 * 10 ** decimals());
    }
}
