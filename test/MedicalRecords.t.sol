// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "forge-std/Test.sol";
import "../src/MedicalRecords.sol";

contract MedicalRecordsTest is Test {
    MedicalRecords medicalRecords;

    function setUp() public {
        medicalRecords = new MedicalRecords();
    }

    function testAddRecord() public {
        medicalRecords.addRecord("QmExampleHash");
        string memory ipfsHash = medicalRecords.getRecord(1);
        assertEq(ipfsHash, "QmExampleHash");
    }
}
