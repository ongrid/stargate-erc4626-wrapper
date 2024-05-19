// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import {IERC20} from "@openzeppelin5/contracts/token/ERC20/IERC20.sol";
import {ERC20} from "@openzeppelin5/contracts/token/ERC20/ERC20.sol";
import {ERC4626} from "@openzeppelin5/contracts/token/ERC20/extensions/ERC4626.sol";

contract LPVault is ERC20, ERC4626 {
    constructor(IERC20 _underlying, string memory _vaultName, string memory _vaultSymbol) ERC20(_vaultName, _vaultSymbol) ERC4626(_underlying) {}

    // Override the decimals function to resolve a conflict between the ERC20 and ERC4626 contracts.
    // Both contracts have a decimals function, but we want to use the one from ERC4626.
    function decimals() public view virtual override(ERC20, ERC4626) returns (uint8) {
        return ERC4626.decimals();
    }

    // todo: override the function to interact with the LPStaking contract
    // by calling the deposit function on its behalf and calculate shares
    function _deposit(address caller, address receiver, uint256 assets, uint256 shares) internal virtual override {}

    // todo: override the function to interact with the LPStaking contract by calling
    // the deposit function on its behalf and burn the corresponding amount of "wrapped" shares.
    function _withdraw(address caller, address receiver, address owner, uint256 assets, uint256 shares) internal virtual override{}
}
