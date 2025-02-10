// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "forge-std/Script.sol";
import "../src/MedicalRecords.sol";

contract Deploy is Script {
    function run() external {
        vm.startBroadcast();
        MedicalRecords medicalRecords = new MedicalRecords();
        console.log("Contract deployed at:", address(medicalRecords));
        vm.stopBroadcast();
    }
}
