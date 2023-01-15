/ SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract ZkEVMPolygon is ERC20 {
    constructor() ERC20("zkEVM-Polygon", "L2Pol") {
        _mint(msg.sender, 1000 * 10 ** decimals());
    }
}
