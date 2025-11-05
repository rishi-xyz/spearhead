// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

/// @title Naming Registry
/// @notice Maps wallet addresses to a chosen display name. Users reconnecting with the same address retrieve their stored name.
contract NamingRegistry {
    mapping(address => string) private _names;

    event NameSet(address indexed user, string name);

    /// @notice Set or update the caller's name.
    /// @param name The preferred display name.
    function setName(string calldata name) external {
        _names[msg.sender] = name;
        emit NameSet(msg.sender, name);
    }

    /// @notice Get the stored name for a wallet address.
    /// @param user The wallet address to query.
    function getName(address user) external view returns (string memory) {
        return _names[user];
    }

    /// @notice Convenience function to read the caller's name.
    function myName() external view returns (string memory) {
        return _names[msg.sender];
    }
}
