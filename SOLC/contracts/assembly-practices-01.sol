// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract NormalPow {
    function pow(uint256 a, uint256 b) public pure returns (uint256) {
        return a ** b;
    }
}

contract AssemblyPow {
    function pow(uint256 a, uint256 b) public pure returns (uint256 n) {
        /// @solidity memory-safe-assembly
        assembly {
            n := exp(a, b)
        }
    }
}
